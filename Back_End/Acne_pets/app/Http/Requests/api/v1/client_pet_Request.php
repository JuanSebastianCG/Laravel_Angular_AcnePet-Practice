<?php

namespace App\Http\Requests\api\v1;

use Illuminate\Foundation\Http\FormRequest;

class client_pet_Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'client_id' => 'required|integer',
            'pet_id' => 'required|integer',
        ];
    }
}
