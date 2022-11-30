import { Component, OnInit } from '@angular/core';



/* PET API */
import { PetsApiService } from '../../api/pets/pets-api.service';
import { Ihttp } from '../../api/pets/Ihttp';

/* activate route */
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {


  data = {} as Ihttp[];
  confirmation = false as boolean;
  sesionId = -1 as number; 
  
  dataRoute = {} as {
    id: number,
  };

  constructor(private PetsApiService: PetsApiService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.confirmation = false;

    let id = localStorage.getItem('id');
    if (id != null) {
      this.sesionId = Number(id);
    }else{
      this.sesionId = -1;
    }

    this.route.data.subscribe((data) => {

      if (data['id'] == 'True') {
        this.confirmation = true;
        this.getPetsFromClient(this.sesionId);
      } else {
        this.confirmation = false;
        this.getAllPets();
      }
    })

  }

  getAllPets() {
    this.PetsApiService.getPets().subscribe((httpRequest) => {
      console.log(httpRequest);
      this.data = httpRequest;
      return this.data;
    });
  }

  getPetsFromClient(id: number) {
    this.PetsApiService.getPetsFromClient(id).subscribe((httpRequest) => {
      console.log(httpRequest);
      this.data = httpRequest;
      return this.data;
    });
  }


  deletePet(id: number ) {
    let idClient = Number(localStorage.getItem('id'));

    this.PetsApiService.deletePet(idClient, id).subscribe((httpRequest) => {
      console.log(httpRequest);
      /* reload page */
      window.location.reload();
    });
  }

  addPet(petId: number) {
    let idClient = Number(localStorage.getItem('id'));
    this.PetsApiService.addpetToClient(idClient, petId).subscribe((httpRequest) => {
      console.log(httpRequest);
      window.location.reload();
    });
  }




}
