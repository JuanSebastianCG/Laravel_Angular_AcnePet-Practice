import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ihttp } from './Ihttp';



@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private datos : HttpClient) { }

  public getDatos(){
    return this.datos.get<Ihttp>('https://jsonplaceholder.typicode.com/users');
  }
  

}
