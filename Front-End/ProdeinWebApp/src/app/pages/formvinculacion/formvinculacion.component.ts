import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */

@Component({
  selector: 'app-formvinculacion',
  templateUrl: './formvinculacion.component.html',
  styleUrls: ['./formvinculacion.component.css']
})


export class FormvinculacionComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  foods: Food[] = [
    {value: 'Voluntariado(Centros)-0', viewValue: 'Voluntariado(Centros)'},
    {value: 'Adorador(Capillas en que sitio)-1', viewValue: 'Adorador(Capillas en que sitio)'},
    {value: 'Cam-2', viewValue: 'Cam'},
    {value: 'Reinado de María(centros)-3', viewValue: 'Reinado de María(centros)'},
    {value: 'Beneficiario comedor-4', viewValue: 'Beneficiario comedor'},
    {value: 'Alumno-5', viewValue: 'Alumno'},
    {value: 'Egresado-6', viewValue: 'Egresado'},
    {value: 'Personal Educativo-7', viewValue: 'Personal Educativo'},
    {value: 'JUM(Jóvenes unidos Marianos Misioneros-8', viewValue: 'JUM(Jóvenes unidos Marianos Misioneros-8'},
    {value: 'Sítios-9', viewValue: 'Sítios'},
    {value: 'Miembro-10', viewValue: 'Miembro'},
    {value: 'Misionero de María-11', viewValue: 'Misionero de María'},
   
    
  ];
}
