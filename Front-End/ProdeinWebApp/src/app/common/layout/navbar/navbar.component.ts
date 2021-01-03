import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../core/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(): void { // Por hacer mensaje de confirmacion al salir la sesion
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
