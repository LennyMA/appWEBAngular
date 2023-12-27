import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _idM: 1901, name: 'Pedri González', espe: "Motores a diesel", taller: 1 },
    { _idM: 1902, name: 'Homero Simpson', espe: "Motores a gasolina", taller: 2 },
    { _idM: 1903, name: 'Lionel Messi', espe: "Suspención", taller: 3 },
    { _idM: 1904, name: 'Neymar Júnior', espe: "Pintado y enderezado", taller: 4 },
    { _idM: 1905, name: 'Luis Suárez', espe: "Sistema eléctrico", taller: 5 },
    { _idM: 1906, name: 'Sergio Busquets', espe: "Motores a diesel", taller: 1 },
    { _idM: 1907, name: 'Marge Simpson', espe: "Motores a gasolina", taller: 2 },
    { _idM: 1908, name: 'Lautaro Martínez', espe: "Suspención", taller: 3 },
    { _idM: 1909, name: 'Raphinha Dias', espe: "Pintado y enderezado", taller: 4 },
    { _idM: 19010, name: 'Ronald Araújo', espe: "Sistema eléctrico", taller: 5 },
    { _idM: 19011, name: 'Jordi Alba', espe: "Motores a diesel", taller: 1 },
    { _idM: 19012, name: 'Bart Simpson', espe: "Motores a gasolina", taller: 2 },
    { _idM: 19013, name: 'Emiliano Martínez', espe: "Suspención", taller: 3 },
    { _idM: 19014, name: 'Alisson Becker', espe: "Pintado y enderezado", taller: 4 },
    { _idM: 19015, name: 'Federico Valverde', espe: "Sistema eléctrico", taller: 5 },
    { _idM: 19016, name: 'Ansu Fati', espe: "Motores a diesel", taller: 1 },
    { _idM: 19017, name: 'Lisa Simpson', espe: "Motores a gasolina", taller: 2 },
    { _idM: 19018, name: 'Ángel Di María', espe: "Suspención", taller: 3 },
    { _idM: 19019, name: 'Rodrygo Silva', espe: "Pintado y enderezado", taller: 4 },
    { _idM: 19020, name: 'Edison Cavani', espe: "Sistema eléctrico", taller: 5 },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_idM", title: "CÉDULA" },
    { field: "name", title: "NOMBRE" },
    { field: "espe", title: "ESPECIALIDAD" },
    { field: "taller", title: "N° TALLER" },
  ]

  data: any[] = []
  totalRecords = this.data.length

  constructor() {
    this.loadMechanics()
  }

  ngOnInit(): void {
  }

  loadMechanics() {
    this.data = this.records
    this.totalRecords = this.records.length
  }

}
