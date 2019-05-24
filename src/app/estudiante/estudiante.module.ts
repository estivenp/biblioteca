import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
    imports: [
        CommonModule,
        EstudianteRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [EstudianteComponent, SidebarComponent, HeaderComponent]
})
export class EstudianteModule {}
