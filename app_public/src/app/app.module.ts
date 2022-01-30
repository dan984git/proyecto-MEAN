import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';// 3. El modulo HttpClientModule importado para toda la aplicacion

import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DemostracionesComponent } from './demostraciones/demostraciones.component';
import { VideoproductosComponent } from './videoproductos/videoproductos.component';

@NgModule({
  declarations: [
    QueHacemosComponent,
    RecetasComponent,
    DemostracionesComponent,
    VideoproductosComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule // 4. El modulo HttpClientModule disponible para la aplicacion
  ],
  providers: [],
  bootstrap: [
    QueHacemosComponent,
    RecetasComponent,
    DemostracionesComponent,    
    VideoproductosComponent
  ]
})
export class AppModule { }
