import { Component, OnInit } from '@angular/core';

/* PET API */
import { PetsApiService } from '../../api/pets/pets-api.service';
import { Ihttp , IhttpData} from '../../api/pets/Ihttp';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  data = {} as Ihttp[];

  constructor(private PetsApiService: PetsApiService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets() {

    
   this.PetsApiService.getPets().subscribe((data) => {
      
      let pets : Ihttp[] = data.data;
      this.data = pets;

      return this.data;
    });
  }

}
