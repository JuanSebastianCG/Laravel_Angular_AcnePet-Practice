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

  public getPetsFromClient(id: number) {
    return this.datos.get<Ihttp[]>(this.url + 'clients/'+id+'/pets')
  }

  public addPet( name: string, type: string, date_of_birth: string) {
    
    return this.datos.post<Ihttp>(this.url + 'pets', {
      name: name,
      type: type,
      date_of_birth: date_of_birth
    })
  }



}
