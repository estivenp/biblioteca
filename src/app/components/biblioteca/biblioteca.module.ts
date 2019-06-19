import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BibliotecaComponent } from './biblioteca.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { LibroComponent } from '../libro/libro.component';
import { BusquedaPipe } from '../../pipes/busqueda';
import { GerneroPipe } from '../../pipes/genero';

@NgModule({
    imports: [CommonModule,FormsModule,NgbModule,BibliotecaRoutingModule],
    declarations: [BibliotecaComponent,HeaderComponent,SidebarComponent,LibroComponent,BusquedaPipe,GerneroPipe]
})
export class BibliotecaModule {}