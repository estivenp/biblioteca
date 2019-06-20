import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';

import { MisReservasComponent } from './mis_reservas.component';
// import { HeaderComponent } from '../header/header.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { MisReservasRoutingModule } from './mis_reservas-routing.module';
import { LibroModule } from '../libro/libro.module';

@NgModule({
    imports: [CommonModule, FormsModule, NgbModule, MisReservasRoutingModule,
         HeaderModule, SidebarModule, LibroModule],
    declarations: [MisReservasComponent]
})
export class MisReservasModule {}
