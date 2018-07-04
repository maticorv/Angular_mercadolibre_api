
import { DetalleCategoriaComponent } from './mercadolibre/detalleCategoria.component';
import { CategoriasComponent } from './mercadolibre/categorias.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Route Configuration
export const routes: Routes = [
  
  { path: 'detalleCategoria/:id', component: DetalleCategoriaComponent},
  { path: 'categorias', component: CategoriasComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);