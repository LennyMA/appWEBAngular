import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interfaces';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { AgenciaService } from '../../services/agencia.service';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, name: 'Ambato', address: 'Calle A' },
    { _id: 2, name: 'Riobamba', address: 'Calle B' },
    { _id: 3, name: 'Quito', address: 'Calle C' },
    { _id: 4, name: 'Cuenca', address: 'Calle D' },
    { _id: 5, name: 'Guayaquil', address: 'Calle E' },
    { _id: 6, name: 'Ambato', address: 'Calle A' },
    { _id: 7, name: 'Riobamba', address: 'Calle B' },
    { _id: 8, name: 'Quito', address: 'Calle C' },
    { _id: 9, name: 'Cuenca', address: 'Calle D' },
    { _id: 10, name: 'Guayaquil', address: 'Calle E' },
    { _id: 11, name: 'Ambato', address: 'Calle A' },
    { _id: 12, name: 'Riobamba', address: 'Calle B' },
    { _id: 13, name: 'Quito', address: 'Calle C' },
    { _id: 14, name: 'Cuenca', address: 'Calle D' },
    { _id: 15, name: 'Guayaquil', address: 'Calle E' },
    { _id: 16, name: 'Ambato', address: 'Calle A' },
    { _id: 17, name: 'Riobamba', address: 'Calle B' },
    { _id: 18, name: 'Quito', address: 'Calle C' },
    { _id: 19, name: 'Cuenca', address: 'Calle D' },
    { _id: 20, name: 'Guayaquil', address: 'Calle E' },
    { _id: 21, name: 'Ambato', address: 'Calle A' },
    { _id: 22, name: 'Riobamba', address: 'Calle B' },
    { _id: 23, name: 'Quito', address: 'Calle C' },
    { _id: 24, name: 'Cuenca', address: 'Calle D' },
    { _id: 25, name: 'Guayaquil', address: 'Calle E' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "AGENCIA" },
    { field: "address", title: "DIRECCIÓN" },
  ]

  data: any[] = [] //la informacion que va a ir mostrando cada vez que el usuario cambie de pagina (porcion de registros)
  totalRecords = this.data.length //total de registros
  KeypadButtons: KeypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet, private agenciaService: AgenciaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.loadAgencies()
  }

  ngOnInit(): void {
  }

  loadAgencies() {
    //necesitamos una instancia del servicio, asi que agregamos un parametro en el constructor de AgenciaService
    //siempre que se trabaja con observadores hay que suscribirse al servicio
    this.agenciaService.loadAgencies().subscribe(data => {
      //data esta capturando todo lo de agencias
      this.records = data
      this.totalRecords = this.records.length
      this.changePage(0) //la paginacion regresa a 0, porque ahora la tabla esta tomando de la BD
    }, error => {
      console.log(error)
    })
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize);
  }


  //any porque no se que viene en ese registro
  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: row
    }

    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options)

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return
      }

      if (response.id) {
        const agencia = { ...response }
        this.agenciaService.updateAgency(response.id, agencia).subscribe(() => {
          this.loadAgencies()
          this.showMessage('Registro Actualizado')
        })
      } else {
        const agencia = { ...response }
        this.agenciaService.addAgency(agencia).subscribe(() => {
          this.loadAgencies()
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id: any) {
    this.agenciaService.deleteAgency(id).subscribe(() => {
      this.loadAgencies()
      this.showMessage('Registro eliminado')
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Agencias", "Agencias", this.records)
        break;
      case 'NEW':
        this.openForm()
    }
  }

  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottomSheet.open(DownloadComponent, { data: document.getElementById('table') }) // el .open me permite abrir un componente 
  }


  showMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, '', { duration })
  }
}
