<?php

namespace App\Http\Requests\api\v1;

use Illuminate\Foundation\Http\FormRequest;

class pet_Request extends FormRequest
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
            'name' => 'required|string',
            'date_of_birth' => 'required|date',
            'type' => 'required|string|in:gato,perro',
        ];
    }
    

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
        return [
            'name.required' => 'A name is required',
            'date_of_birth.required' => 'A date of birth is required',
            'type.required' => 'A type is required',
        ];
    }


}
