import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ihttp } from './Ihttp';



@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private datos: HttpClient) { }

  public getDatos() {
    return this.datos.get<Ihttp>('https://jsonplaceholder.typicode.com/users');
  }

  public getUserById(id: string) { 
    /* search user on the api by id and  name */
    return this.datos.get<Ihttp>('https://jsonplaceholder.typicode.com/users/' + id +"");
  }


}
