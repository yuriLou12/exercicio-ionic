import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'servicos',
    loadChildren: './servicos/servicos.module#servicosPageModule'
  },
  {
    path: 'cadCliente',
    loadChildren: './cadCliente/cadCliente.module#cadClientePageModule'
  },

  {
    path: 'cadProfissional',
    loadChildren: './cadProfissional/cadProfissional.module#cadProfissionalPageModule'
  },

  {
    path: 'suporte',
    loadChildren: './suporte/suporte.module#suportePageModule'
  },

  {
    path: 'reparo',
    loadChildren: './reparo/reparo.module#reparoPageModule'
  },

  {
    path: 'eletrico',
    loadChildren: './eletrico/eletrico.module#eletricoPageModule'
  },

  {
    path: 'entrega',
    loadChildren: './entrega/entrega.module#entregaPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
