import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibEstudianteComponent } from './bib-estudiante.component';

const routes: Routes = [
    {
        path: '',
        component: BibEstudianteComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BibEstudianteRoutingModule {}
