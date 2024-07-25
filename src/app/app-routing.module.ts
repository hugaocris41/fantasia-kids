import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'acao',
    loadChildren: () => import('./pages/acao/acao.module').then( m => m.AcaoPageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./pages/aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'esporte',
    loadChildren: () => import('./pages/esporte/esporte.module').then( m => m.EsportePageModule)
  },
  {
    path: 'fantasia',
    loadChildren: () => import('./pages/fantasia/fantasia.module').then( m => m.FantasiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
