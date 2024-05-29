import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component'; 
import { HomeComponent } from './private/home/home.component';
import { ImagensAprovadasComponent } from './private/imagens-aprovadas/imagens-aprovadas.component';
import { ImagensReprovadasComponent } from './private/imagens-reprovadas/imagens-reprovadas.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'imagens-aprovadas', component: ImagensAprovadasComponent },
  { path: 'imagens-reprovadas', component: ImagensReprovadasComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
