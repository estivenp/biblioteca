import { Component, OnInit,Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Libro } from '../../models/libro';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss'],
    animations: [routerTransition()]
})
export class LibroComponent implements OnInit {

    @Input() libro: any;

    constructor() {}

    ngOnInit() {
    }
}