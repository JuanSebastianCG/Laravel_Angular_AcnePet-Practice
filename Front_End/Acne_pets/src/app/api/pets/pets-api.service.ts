import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Ihttp } from './Ihttp';


@Injectable({
  providedIn: 'root'
})
export class PetsApiService {

  constructor(private datos: HttpClient) { }
  private url = 'http://127.0.0.1:8000/api/v1/';

  public getPets() {
    return this.datos.get<Ihttp[]>(this.url + 'pets')
  }

  public addPet(name: String, type: String, date_of_birth: Date){
    let body = {

      name: name,
      date_of_birth: date_of_birth,
      type: type
    }
    
    this.datos.post<any>(this.url + 'pets/post', body).subscribe()
  }



}
