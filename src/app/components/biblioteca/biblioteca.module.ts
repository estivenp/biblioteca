import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';

import { BibliotecaComponent } from './biblioteca.component';
// import { HeaderComponent } from '../header/header.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { LibroModule } from '../libro/libro.module';
import { DetalleComponent } from '../detalle_libro/detalle.component';
import { ListarComponent } from '../listar/listar.component';
import { ReservaComponent } from '../reserva/reserva.component'
import { BusquedaPipe } from '../../pipes/busqueda';
import { GerneroPipe } from '../../pipes/genero';
// import { LibroService  } from '../../services/libros.service';
// import { ReservaService } from '../../services/reservas.service';

@NgModule({
    imports: [CommonModule,FormsModule,NgbModule,BibliotecaRoutingModule,HeaderModule,SidebarModule,LibroModule],
    declarations: [BibliotecaComponent,BusquedaPipe,GerneroPipe,DetalleComponent,ListarComponent,ReservaComponent]
    // providers: [LibroService,ReservaService]
})
export class BibliotecaModule {}