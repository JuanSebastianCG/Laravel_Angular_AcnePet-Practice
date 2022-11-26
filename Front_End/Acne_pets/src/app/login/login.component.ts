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
      id: ['', Validators.required],
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

    this.UserData.getUserById(this.registerForm.value.id).subscribe((data) => {
      this.data = data;
      console.log(this.data);

      /* if the jason is empty */
      if (this.data.name == undefined) 
        this.registerForm.controls['name'].setErrors({ 'notFound': true });
        
      /* compara name with the user */
      if (this.data.name == this.registerForm.value.name) {
        alert("Bienvenido " + this.data.name);
      } else {
        /* show wit form validation error */
        this.registerForm.controls['name'].setErrors({ 'notFound': true });
      }
    });

  }


}
