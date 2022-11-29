import { Component, OnInit } from '@angular/core';

import { PetsApiService } from '../../api/pets/pets-api.service';
import { Ihttp } from '../../api/pets/Ihttp';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  newPet: any = FormGroup

  constructor(private PetData: PetsApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.newPet = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      date_of_birth: ['', Validators.required]
    });
  }

  get f() { return this.newPet.controls; }

  public addPets(){

    if (this.newPet.invalid) {
      return;
    }
    console.log(this.newPet.value.name)
    console.log(this.newPet.value.type)
    console.log(this.newPet.value.date_of_birth)
    this.PetData.addPet(this.newPet.value.name,this.newPet.value.type,this.newPet.value.date_of_birth)
  }

}
