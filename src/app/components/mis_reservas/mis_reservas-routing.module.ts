import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisReservasComponent } from './mis_reservas.component';

const routes: Routes = [
    { 
        path: '',
        component: MisReservasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MisReservasRoutingModule {}
