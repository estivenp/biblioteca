import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
    { path: '', loadChildren: './components/biblioteca/biblioteca.module#BibliotecaModule' },
    { path: 'misReservas', loadChildren: './components/mis_reservas/mis_reservas.module#MisReservasModule' },
    { path: 'not-found', loadChildren: './components/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
