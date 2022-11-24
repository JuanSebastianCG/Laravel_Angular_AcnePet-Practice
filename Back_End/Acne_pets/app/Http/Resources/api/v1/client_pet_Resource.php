<?php

namespace App\Http\Resources\api\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class client_pet_Resource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'client_id' => $this->client_id,
            'pet_id' => $this->pet_id,
            'pet' => $this->pets,
        ];
    }
}
