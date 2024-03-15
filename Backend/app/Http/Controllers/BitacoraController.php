<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Bitacora::all();
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
        Bitacora::create($request->all());
        return response()->json([
            'response' => true,
            'message' => '¡Bitacora creada correctamente!'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Bitacora::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bitacora $bitacora)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $bitacora = Bitacora::find($id);
        $bitacora->update($request->all());
        return response()->json([
            'response' => true,
            'message' => '¡Bitacora actualizada correctamente!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Bitacora::destroy($id);
        return response()->json([
            'response' => true,
            'message' => '¡Bitacora eliminada correctamente!'
        ], 200);
    }
}
