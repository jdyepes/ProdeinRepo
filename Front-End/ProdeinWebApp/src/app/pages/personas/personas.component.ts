import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Codigo', 'Nombre', 'Apellidos', 'Pais'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  foods: Food[] = [
    {value: 'Activo-0', viewValue: 'Activo'},
    {value: 'Inactivo-1', viewValue: 'Inactivo'}
    
  ];
}
export interface PeriodicElement {
  Nombre: string;
  Codigo: number;
  Apellidos: string;
  Pais: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Codigo: 1, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 2, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 3, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 4, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 5, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 6, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 7, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 8, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 9, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 10, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 11, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 12, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 13, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 14, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 15, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 16, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 17, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 18, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 19, Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 20, Nombre: '', Apellidos: '', Pais: ''},
];



