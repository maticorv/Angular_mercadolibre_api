import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { DetalleCategoriaComponent } from './mercadolibre/detalleCategoria.component';
import { MercadolibreService } from './mercadolibre/mercadolibre.service';
import { CategoriasComponent } from './mercadolibre/categorias.component';

import { DatePickerPipe } from './pipes/common-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,

    DatePickerPipe,
    DetalleCategoriaComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MercadolibreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
