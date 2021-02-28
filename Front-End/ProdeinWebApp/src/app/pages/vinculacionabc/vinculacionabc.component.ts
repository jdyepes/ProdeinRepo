import { Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-vinculacionabc',
  templateUrl: './vinculacionabc.component.html',
  styleUrls: ['./vinculacionabc.component.css'],
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

export class VinculacionabcComponent implements OnInit  {

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
}


