<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Client_pets_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        \DB::table('client_pets')->insert([
            'client_id' => 1,
            'pet_id' => 1,
        ]);

        \DB::table('client_pets')->insert([
            'client_id' => 1,
            'pet_id' => 2,
        ]);

        \DB::table('client_pets')->insert([
            'client_id' => 2,
            'pet_id' => 3,
        ]);


    }
}
