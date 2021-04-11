
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

import * as _moment from "moment";

// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from "moment";
import { DATE_FORMATS } from 'src/app/common/const/format';

const moment = _rollupMoment || _moment;

interface Food {
  value: string;
  viewValue: string;
}

interface Centro {
  value: string;
  viewValue: string;
}

export interface DonacionesElement {
  Codigo: number;
  Identificacion: string;
  Nombre: string;  
  Apellidos: string;
  Pais: string;
}

export interface DatosPersonalesTab {
  Codigo: number;
  Nombre: string; 
  Apellidos: string;
  FechaNacimiento: Date;
  RRSS: string; //redes sociales
  Correos: string[]; 
  Telefonos: string[];
}

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }
  ]
})

export class DonacionesComponent implements OnInit, AfterViewInit  {
  // tabla personas
  displayedColumns: string[] = ['Codigo', 'Identificacion', 'Nombre', 'Apellidos', 'Pais'];
  dataSource = new MatTableDataSource<DonacionesElement>(ELEMENT_DATA);
  @ViewChild('paginatorDonaciones') paginatorDonaciones!: MatPaginator;
  // fin tabla personas
  
  //==================== Contenido dentro de las Tabs ============================//
  
  //** Datos Personales */
  datosPersonalesColumns: string[] = ['Codigo', 'Nombre', 'Apellidos', 'FechaNacimiento','RRSS','Correos','Telefonos'];
  datosPersonalesdataSource = new MatTableDataSource<DatosPersonalesTab>(DATOS_PERSONALES);
  @ViewChild('paginatorDatosPers') paginatorDatosPers!: MatPaginator;


  ngAfterViewInit() {      
    this.dataSource.paginator = this.paginatorDonaciones;
    this.datosPersonalesdataSource.paginator = this.paginatorDatosPers;
  }

  date = new FormControl(moment());
  
  constructor() { }

  ngOnInit(): void {
  }

  // cambiar nombre boris --
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
  
  centros: Centro[] = [
    {value: 'UE NSE-0', viewValue: 'UE NSE'},
    {value: 'UE MVM-1', viewValue: 'UE MVM'},
    {value: 'MACA-2', viewValue: 'MACA'},
    {value: 'NAZARENO-3', viewValue: 'NAZARENO'},
    {value: 'COCHE-4', viewValue: 'COCHE'},
    {value: 'ENCANTADO-5', viewValue: 'ENCANTADO'},
    {value: 'TACARIGUA-6', viewValue: 'TACARIGUA'},
    {value: 'VALENCIA-7', viewValue: 'VALENCIA'},
    {value: 'BARQUISIMETO-8', viewValue: 'BARQUISIMETO'},
    {value: 'LA FLORESTA-9', viewValue: 'LA FLORESTA'},
    
    
  ];

  estados: any[] = [
    {value: '0', viewValue: 'Bolivares'},
    {value: '1', viewValue: 'Dolares'},
    {value: '2', viewValue: 'Euros'}    
    
  ];
}


const ELEMENT_DATA: DonacionesElement[] = [
  {Codigo: 1, Identificacion: 'V123456789', Nombre: 'Jesus', Apellidos: 'Yepes', Pais: 'Venezuela'},
  {Codigo: 2, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 3, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 4, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 5, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 6, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 7, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 8, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 9, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 10, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 11, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 12, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 13, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 14, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 15, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 16, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 17, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 18, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 19, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 20, Identificacion: 'J-145655555', Nombre: 'Boris', Apellidos: 'Arteta', Pais: 'Venezuela'},
];

const DATOS_PERSONALES: DatosPersonalesTab[] = [                        //meses de 0-11
  { Codigo: 1, Nombre: 'Jesus', Apellidos: 'Yepes', FechaNacimiento: new Date(1995,4,12),RRSS:'correo',Correos:['jesus123@gmail.com','jesus456@hotmail.com'], Telefonos:['0412-123-45-56', '0212-254-65-45']},  
  { Codigo: 2, Nombre: 'Boris', Apellidos: 'Arteta P', FechaNacimiento: new Date(1995,9,23),RRSS:'instagram',Correos:['boris123@gmail.com', 'boriskraka6@hotmail.com'], Telefonos:['0412-123-45-56', '0212-254-65-45']}
];