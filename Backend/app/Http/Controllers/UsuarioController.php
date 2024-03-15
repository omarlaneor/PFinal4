<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Usuario;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Usuario::all();
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
                'usuario' => 'required',
                'nombre' => 'required',
                'apellido' => 'required',
                'email' => 'required',
                'fecha' => 'required',
                "idrol" => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => 'Faltan datos por rellenar.'], 401);
                // return response()->json(['error' => $validator->errors()], 401);
            }

            $usuario = Usuario::create([
                'usuario' => $request->usuario,
                'nombre' => $request->nombre,
                'apellido' => $request->apellido,
                'email' => $request->email,
                'password' => Hash::make('usuario'),
                'fecha' => $request->fecha,
                "idrol" => $request->idrol,
            ]);

            $bitacora = Bitacora::add("Usuario creado con el id: {$usuario->id}");

            if (!$bitacora) {
                throw new Exception('Error al crear la bitacora.');
            }

            return response()->json(['success' => '¡Usuario registrado correctamente!'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error Interno.'], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Usuario::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::find($id);
        $usuario->update($request->all());
        return response()->json([
            'success' => '¡Usuario actualizado correctamente!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json([
            'success' => '¡Usuario eliminado correctamente!'
        ], 200);
    }
}
