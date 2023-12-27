import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  records: any[] = [
    { _idS: 1, name: 'Mantenimiento Correctivo' },
    { _idS: 2, name: 'Mantenimiento Correctivo' },
    { _idS: 3, name: 'Mantenimiento Correctivo' },
    { _idS: 4, name: 'Mantenimiento Correctivo' },
    { _idS: 5, name: 'Mantenimiento Correctivo' },
    { _idS: 6, name: 'Mantenimiento Correctivo' },
    { _idS: 7, name: 'Mantenimiento Correctivo' },
    { _idS: 8, name: 'Mantenimiento Correctivo' },
    { _idS: 9, name: 'Mantenimiento Correctivo' },
    { _idS: 10, name: 'Mantenimiento Preventivo' },
    { _idS: 11, name: 'Mantenimiento Preventivo' },
    { _idS: 12, name: 'Mantenimiento Preventivo' },
    { _idS: 13, name: 'Mantenimiento Preventivo' },
    { _idS: 14, name: 'Mantenimiento Preventivo' },
    { _idS: 15, name: 'Mantenimiento Preventivo' },
    { _idS: 16, name: 'Mantenimiento Preventivo' },
    { _idS: 17, name: 'Mantenimiento Preventivo' },
    { _idS: 18, name: 'Mantenimiento Preventivo' },
    { _idS: 19, name: 'Mantenimiento Preventivo' },
    { _idS: 20, name: 'Mantenimiento Preventivo' },
    { _idS: 21, name: 'Mantenimiento Preventivo' },
    { _idS: 22, name: 'Mantenimiento Preventivo' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_idS", title: "ID" },
    { field: "name", title: "TIPO MANTENIMIENTO" },
  ]

  data: any[] = []
  totalRecords = this.data.length

  constructor() {
    this.loadServices()
  }

  ngOnInit(): void {
  }

  loadServices() {
    this.data = this.records
    this.totalRecords = this.records.length
  }

}
