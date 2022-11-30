import { Component, OnInit } from '@angular/core';

import { PetsApiService } from '../../api/pets/pets-api.service';
import { Ihttp } from '../../api/pets/Ihttp';


import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  newPet: any = FormGroup
  data = {} as Ihttp;

  constructor(private PetData: PetsApiService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  get f() { return this.newPet.controls; }


  ngOnInit(): void {

    this.newPet = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      date_of_birth: ['', Validators.required]
    });


    let petId = this.route.snapshot.queryParamMap.get('id')
    if (petId != null) {
      this.PetData.getPet(Number(petId)).subscribe((data) => {
        this.data = data;
        console.log(this.data);
      })
    }



  }



  public add_edit_pet() {

    if (this.newPet.invalid) {
      console.log(this.newPet.value.name);
      return;
    }
    /* edit mascota */
    let petId = this.route.snapshot.queryParamMap.get('id')
    let user = Number (localStorage.getItem('id'));
    if (petId != null)  {
       
      this.PetData.editPetFromClient(user, Number(petId),this.newPet.value.name, this.newPet.value.type, this.newPet.value.date_of_birth).subscribe((data) => {
          alert("Mascota editada");
          window.location.href = "http://localhost:4200/(body:indexPets)";
      })
      
    } else {
      this.PetData.addPet(this.newPet.value.name, this.newPet.value.type, this.newPet.value.date_of_birth).subscribe(
        (data) => {
          if (data) {
            window.location.href = '';
          }
        })
    }
  }



}
