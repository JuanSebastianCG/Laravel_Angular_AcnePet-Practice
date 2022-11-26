import { Component, OnInit } from '@angular/core';

/* user api */
import { UserApiService } from '../api/user/user-api.service';
import { Ihttp } from '../api/user/Ihttp';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data = {} as Ihttp;
  constructor(private UserData : UserApiService) { }

  ngOnInit(): void {
  }

  public login(){

    /* user name */
    let user = (<HTMLInputElement>document.getElementById("name")).value;
    let id = (<HTMLInputElement>document.getElementById("id")).value;
    

    this.UserData.getDatos().subscribe((data : Ihttp) => {
      this.data = data;
      console.log(this.data);
    });
  }


}
