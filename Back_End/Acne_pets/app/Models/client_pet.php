<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client_pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'pet_id',
    ];

    public function pets()
    {
        return $this->belongsTo(Pet::class);
    }
}
