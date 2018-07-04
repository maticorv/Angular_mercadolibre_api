import { MercadolibreService, DetalleCategoria, Categorias } from './mercadolibre.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-call',
  templateUrl: './detalleCategoria.component.html',
 

})
export class DetalleCategoriaComponent  {
  detalleCategoria: DetalleCategoria;
  idCategoria: string;
  categoria: Categorias;

  constructor(private mercadolibreService: MercadolibreService,private route: ActivatedRoute) { }
  
  
  ngOnInit() {

    // El id se recupera como parametro, los parametros se definen en routes.ts
    // El servicio route.params, permite suscribirnos a eventos donde podemos recibir los parametros
    this.route.params.subscribe(params => {
      this.idCategoria = params['id'];
      
      // Si el id de categoria tiene un valor, buscamos los detalle en forma asincrona
      if (this.idCategoria) {
         this.mercadolibreService.getDetalleCategoria(this.idCategoria).then(d => this.detalleCategoria = d); 
          }
        });
   
      }
 
  }