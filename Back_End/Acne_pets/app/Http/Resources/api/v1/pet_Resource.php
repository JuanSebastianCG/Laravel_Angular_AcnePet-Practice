<?php

namespace App\Http\Resources\api\v1;

use Illuminate\Http\Resources\Json\JsonResource;


class pet_Resource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        /* age : actual date minus date of birth */
        $age = date_diff(date_create($this->date_of_birth), date_create('now'))->y;

        $userData = null;
        if($this->client_pet != null)
            $userData = [
                'client_id' => $this->client_pet->client_id,
                'pet_id' => $this->client_pet->pet_id,
            ];
        
            
        return [
            'id' => $this->id,
            'name' => $this->name,
            'date_of_birth' => $this->date_of_birth,
            'age' => $age,
            'type' => $this->type,
            'client_pet' => $userData,
        ];


    }
}
