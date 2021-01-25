import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnoAtualComponent } from './ano-atual/ano-atual.component';
import { AnosAnterioresComponent } from './anos-anteriores/anos-anteriores.component';
import { InicialComponent } from './inicial/inicial.component';


const routes: Routes = [
  { path: 'inicial', component: InicialComponent },
  { path: 'ano-atual', component: AnoAtualComponent },
  { path: 'anos-anteriores', component: AnosAnterioresComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicial' },
  { path: '**', redirectTo: 'inicial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
