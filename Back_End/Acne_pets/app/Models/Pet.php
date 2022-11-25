<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'date_of_birth',
        'type',
    ];

    public function client_pet()
    {
        return $this->hasOne(client_pet::class);
    }
}
