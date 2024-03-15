<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Pagina;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pagina::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nombre' => 'required',
                'descripcion' => 'required',
                'url' => 'required',
                'usuario_creacion' => 'required',
                'fecha_creacion' => 'required',
                'fecha_modificacion' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => 'Faltan datos por rellenar.'], 401);
            }

            $pagina = Pagina::create([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'url' => $request->url,
                'usuario_creacion' => $request->usuario_creacion,
                'fecha_creacion' => $request->fecha_creacion,
                'fecha_modificacion' => $request->fecha_modificacion,
            ]);

            $bitacora = Bitacora::add("Pagina creada con el id: {$pagina->id}");

            if (!$bitacora) {
                throw new Exception('Error al crear la bitacora.');
            }

            return response()->json(['success' => '¡Pagina creada con éxito!'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error Interno.'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Pagina::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pagina $pagina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pagina = Pagina::find($id);
        $pagina->update($request->all());
        return response()->json([
            'success' => '¡Pagina actualizada correctamente!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pagina = Pagina::find($id);
        $pagina->delete();
        return response()->json([
            'success' => '¡Pagina eliminada correctamente!'
        ], 200);
    }
}
