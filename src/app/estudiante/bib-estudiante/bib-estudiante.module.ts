import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { BibEstudianteRoutingModule } from './bib-estudiante-routing.module';
import { BibliotecaComponent } from '../../biblioteca/biblioteca.component';
import {BibEstudianteComponent} from './bib-estudiante.component';
import {LibroComponent} from './libro/libro.component';

@NgModule({
    imports: [
        CommonModule,
        BibEstudianteRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        FormsModule
    ],
    declarations: [BibEstudianteComponent ,BibliotecaComponent,LibroComponent]
})
export class BibEstudianteModule {}
