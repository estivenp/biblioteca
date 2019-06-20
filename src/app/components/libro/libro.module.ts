import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibroComponent } from './libro.component'

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [LibroComponent],
    exports: [LibroComponent]
})
export class LibroModule {}