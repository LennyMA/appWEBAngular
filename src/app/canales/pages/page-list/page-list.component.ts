import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, name: 'Canal 1', address: 'TIPO A' },
    { _id: 2, name: 'Canal 2', address: 'TIPO A' },
    { _id: 3, name: 'Canal 3', address: 'TIPO C' },
    { _id: 4, name: 'Canal 4', address: 'TIPO A' },
    { _id: 5, name: 'Canal 5', address: 'TIPO B' },
    { _id: 6, name: 'Canal 6', address: 'TIPO D' },
    { _id: 7, name: 'Canal 7', address: 'TIPO A' },
    { _id: 8, name: 'Canal 8', address: 'TIPO C' },
    { _id: 9, name: 'Canal 9', address: 'TIPO B' },
    { _id: 10, name: 'Canal 10', address: 'TIPO E' },
    { _id: 11, name: 'Canal 11', address: 'TIPO D' },
    { _id: 12, name: 'Canal 12', address: 'TIPO B' },
    { _id: 13, name: 'Canal 13', address: 'TIPO C' },
    { _id: 14, name: 'Canal 14', address: 'TIPO A' },
    { _id: 15, name: 'Canal 15', address: 'TIPO B' },
    { _id: 16, name: 'Canal 16', address: 'TIPO B' },
    { _id: 17, name: 'Canal 17', address: 'TIPO E' },
    { _id: 18, name: 'Canal 18', address: 'TIPO A' },
    { _id: 19, name: 'Canal 19', address: 'TIPO D' },
    { _id: 20, name: 'Canal 20', address: 'TIPO C' },
    { _id: 21, name: 'Canal 21', address: 'TIPO B' },
    { _id: 22, name: 'Canal 22', address: 'TIPO C' },
    { _id: 23, name: 'Canal 23', address: 'TIPO A' },
    { _id: 24, name: 'Canal 24', address: 'TIPO E' },
    { _id: 25, name: 'Canal 25', address: 'TIPO D' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "CANAL" },
    { field: "address", title: "TIPO DE CANAL" },
  ]

  data: any[] = []
  totalRecords = this.data.length //total de registros

  constructor() {
    this.loadCanals()
  }

  ngOnInit(): void {
  }

  loadCanals() {
    this.data = this.records
    this.totalRecords = this.records.length
  }

}
