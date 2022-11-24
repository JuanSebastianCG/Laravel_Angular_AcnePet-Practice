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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'date_of_birth' => $this->date_of_birth,
            'date' => $this->date,
            'type' => $this->type,
            'client' => $this->clients,
        ];
    }
}
