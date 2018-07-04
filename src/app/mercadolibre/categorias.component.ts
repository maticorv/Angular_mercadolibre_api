import { MercadolibreService, Categorias, DetalleCategoria } from './mercadolibre.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DetalleCategoriaComponent } from './detalleCategoria.component';


@Component({
  selector: 'app-paises',
  templateUrl: './categorias.component.html',
 
  
})
export class CategoriasComponent implements OnInit {
  categorias: Categorias[];
  categoria: string;
  detalleCategoria: DetalleCategoria;
  
  constructor(private mercadolibreService: MercadolibreService, private router: Router) { }

  ngOnInit() {
    
    this.mercadolibreService.getCategorias().then(d => this.categorias = d);
  }
  

}