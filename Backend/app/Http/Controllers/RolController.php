<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Rol;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Rol::all();
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
                'rol' => 'required',
                'fechacreacion' => 'required',
                'fechamodificacion' => 'required',
                'estado' => 'required',
                'cambiar_estado' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => 'Faltan datos por rellenar.'], 401);
            }

            $rol = Rol::create([
                'rol' => $request->rol,
                'fechacreacion' => $request->fechacreacion,
                'fechamodificacion' => $request->fechamodificacion,
                'estado' => $request->estado,
                'cambiar_estado' => $request->cambiar_estado,
            ]);

            $bitacora = Bitacora::add("Rol creado con el id: {$rol->id}");

            if (!$bitacora) {
                throw new Exception('No se pudo registrar la bitacora');
            }

            return response()->json(['success' => '¡Rol creado correctamente!'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error Interno.'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Rol::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rol $rol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $rol = Rol::find($id);
        $rol->update($request->all());
        return response()->json([
            'success' => '¡Rol actualizado correctamente!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $rol = Rol::find($id);
        $rol->delete();
        return response()->json([
            'success' => '¡Rol eliminado correctamente!'
        ], 200);
    }
}
