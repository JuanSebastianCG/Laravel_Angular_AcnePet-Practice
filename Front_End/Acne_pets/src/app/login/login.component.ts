import { Component, OnInit } from '@angular/core';

/* user api */
import { UserApiService } from '../api/user/user-api.service';
import { Ihttp } from '../api/user/Ihttp';

/* form validation */
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  /* user http */
  public data = {} as Ihttp;
  /*  form validation */
  registerForm: any = FormGroup


  constructor(private UserData: UserApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /* form validation */
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required, Validators.min(0)],
    });
  }
  /*  form validation */
  get f() { return this.registerForm.controls; }


  /* ----------------------metodos--------------------------- */
  public login() {

    /* if form is invalid */
    if (this.registerForm.invalid) {
      return;
    }
    /* get user data */
    this.UserData.getUserById(this.registerForm.value.id).subscribe((data) => {
      /* json information from http */
      this.data = data;
      console.log(this.data);
        
      /* compare name with user */
      if (this.data.name == this.registerForm.value.name) {
        alert("Bienvenido " + this.data.name);
        localStorage.setItem('login', JSON.stringify(this.data));
        /* return to template  */
        window.location.href = "http://localhost:4200/";

      } else {
        /* show form validation error in login*/
        this.registerForm.controls['name'].setErrors({ 'notFound': true });

      }
      
    }, (error) => {
      /* if error 404 user not found*/
      this.registerForm.controls['id'].setErrors({ 'notFound': true });
    });

  }


}
