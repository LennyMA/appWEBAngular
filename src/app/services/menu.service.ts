import { Injectable } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

export interface IMenu {
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Agencias', url: '/agencias', icon: '../../assets/icons/agencia.svg' },
    { title: 'Canales', url: '/canales', icon: '../../assets/icons/canal.svg' },
    { title: 'Clientes', url: '/clientes', icon: '../../assets/icons/cliente.svg' },
    { title: 'Mecánicos', url: '/mecanicos', icon: '../../assets/icons/empleado.svg' },
    { title: 'Mantenimientos', url: '/mantenimiento', icon: '../../assets/icons/qr.svg' },
    { title: 'Seguimiento', url: '/seguimiento', icon: '../../assets/icons/seguimiento.svg' }
  ]
  constructor() {

  }
  getMenu(): IMenu[] {
    return [...this.listMenu]
  }

  getMenuByUrl(url: String): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}
