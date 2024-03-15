<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        "usuario",
        "nombre",
        "apellido",
        "email",
        "password",
        "fecha",
        "idrol",
    ];


    public function rol()
    {
        return $this->belongsTo(Rol::class, "idrol");
    }
}
