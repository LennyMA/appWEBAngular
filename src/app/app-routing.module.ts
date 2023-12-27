import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'agencias', loadChildren: () => import('./agencias/agencias.module').then((m) => m.AgenciasModule) },
  { path: 'canales', loadChildren: () => import('./canales/canales.module').then((m) => m.CanalesModule) },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule) },
  { path: 'mecanicos', loadChildren: () => import('./mecanicos/mecanicos.module').then((m) => m.MecanicosModule) },
  { path: 'mantenimiento', loadChildren: () => import('./mantenimientos/mantenimientos.module').then((m) => m.MantenimientosModule) },
  { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then((m) => m.SeguimientoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
