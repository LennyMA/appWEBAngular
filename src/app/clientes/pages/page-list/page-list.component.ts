import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _idC: 1801, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1802, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1803, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1804, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1805, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1806, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1807, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1808, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 1809, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18010, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18011, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18012, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18013, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18014, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18015, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18016, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18017, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18018, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18019, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18020, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18021, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
    { _idC: 18022, name: 'Usuario', telf: '0987654321', address: 'Ciudad1' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_idC", title: "CÉDULA" },
    { field: "name", title: "NOMBRE" },
    { field: "telf", title: "TELÉFONO" },
    { field: "address", title: "DIRECCIÓN" },
  ]

  data: any[] = []
  totalRecords = this.data.length

  constructor() {
    this.loadCustomers()
  }

  ngOnInit(): void {
  }

  loadCustomers() {
    this.data = this.records
    this.totalRecords = this.records.length
  }

}
