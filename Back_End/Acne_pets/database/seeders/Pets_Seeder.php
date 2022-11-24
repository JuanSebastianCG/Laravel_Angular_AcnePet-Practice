<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Pets_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \DB::table('pets')->insert([
            'name' => 'Firulais',
            'date_of_birth' => '2019-01-01',
            'type' => 'perro',
        ]);

        \DB::table('pets')->insert([
            'name' => 'Garfield',
            'date_of_birth' => '2019-01-01',
            'type' => 'gato',
        ]);

        \DB::table('pets')->insert([
            'name' => 'Lassie',
            'date_of_birth' => '2019-01-01',
            'type' => 'perro',
        ]);

        \DB::table('pets')->insert([
            'name' => 'Tom',
            'date_of_birth' => '2019-01-01',
            'type' => 'gato',
        ]);
    }
}
