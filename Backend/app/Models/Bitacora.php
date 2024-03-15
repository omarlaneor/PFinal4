<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{
    use HasFactory;

    public $timestamps = false;

    public $fillable = [
        'fecha',
        'hora',
        'descripcion',
        'usuario',
    ];

    public static function add($mensaje)
    {
        $bitacora = new Bitacora();

        $bitacora->fecha = date('Y-m-d');
        $bitacora->hora = date('H:i:s');
        $bitacora->descripcion = $mensaje;
        $bitacora->usuario = $mensaje;
        $bitacora->save();

        return $bitacora;
    }
}
