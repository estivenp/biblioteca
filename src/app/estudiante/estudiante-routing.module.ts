import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';

const routes: Routes = [
    {
        path: '',
        component: EstudianteComponent,
        children: [
            { path: '', redirectTo: 'biblioteca', pathMatch: 'prefix' },
            { path: 'biblioteca', loadChildren: './bib-estudiante/bib-estudiante.module#BibEstudianteModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstudianteRoutingModule {}
