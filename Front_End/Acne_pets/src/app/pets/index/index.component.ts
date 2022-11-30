import { Component, OnInit } from '@angular/core';


/* PET API */
import { PetsApiService } from '../../api/pets/pets-api.service';
import { Ihttp} from '../../api/pets/Ihttp';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {


  data = {} as Ihttp[];
  constructor(private PetsApiService: PetsApiService) { }

  ngOnInit(): void {

    if (localStorage.getItem('id') == null) {
      this.getAllPets();
    } else {
      this.getPetsFromClient(Number(localStorage.getItem('id')));
    }
    
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

   


}
