import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProdeinWebApp';
  route: string='';
  mostrar: any;

  constructor(location: Location,
              router: Router) {

    // para mostrar y/o ocultar el menu lateral y menu superior cuando es login
    router.events.subscribe(val => {
      this.route = location.path();
      if (location.path() == "/login" || location.path() == "") {        
        console.log(this.route);
        this.mostrar = false;
      } 
      else 
      {
        this.mostrar = true;
        console.log(this.route);
      }
    });
  }
    ngOnInit(): void {

    }
}
