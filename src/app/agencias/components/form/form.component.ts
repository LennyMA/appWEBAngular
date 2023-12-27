import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cmv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = ""
  group!: FormGroup // el signo ! permite inicializar despues
  //hay que hacer una referencia a la caja de dialogo para tener el control sobre eso
  //MatDialogRef<FormComponent> asi tengo la referencia desde el cuadro de dialogo a la referencia

  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    //una condicion para saber a que boton se dio click (agregar o editar)
    //revisa si hay datos o no
    this.title = data ? "EDITAR" : "NUEVO"
  }

  ngOnInit(): void {
    //mando a cargar cuando se inicializa el componente
    this.loadForm()
  }

  loadForm() {
    this.group = new FormGroup({
      //con el data que esta en el constructor
      id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name, Validators.required),
      address: new FormControl(this.data?.address, Validators.required)
    })
  }

  save() {
    //va a tomar todo lo que ingreso el usuario
    const record = this.group.value
    //esto esta en un cuadro de dialogo y hay que enviar al componente
    this.reference.close(record)

  }

}
