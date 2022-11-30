import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  session = localStorage.getItem('id');
  constructor() { }


  ngOnInit(): void {
    this.session = localStorage.getItem('id');
  }

  logout(){
    console.log('logout');
    localStorage.clear();
    window.location.reload();
    window.location.href = "http://localhost:4200/";
  }


}
