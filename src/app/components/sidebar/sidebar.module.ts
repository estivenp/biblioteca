import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component'

@NgModule({
    imports: [CommonModule,FormsModule,RouterModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SidebarModule {}