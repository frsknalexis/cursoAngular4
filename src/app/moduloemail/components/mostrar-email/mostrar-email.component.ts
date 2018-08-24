import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'mostrar-email',
    template: `
        <span *ngIf="emailContacto">
            <h4>{{title}}</h4>
            <strong>Email de Contacto: </strong> {{emailContacto}}
            <button (click)="borrarEmail()">Eliminar email de Contacto</button>
        </span>
    `
})

export class MostrarEmailComponent implements DoCheck, OnInit {

    title = 'Mostrar email';
    emailContacto: string;

    ngOnInit(){
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    ngDoCheck(){
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    borrarEmail(){
        localStorage.removeItem('emailContacto');
        localStorage.clear();
        this.emailContacto = null;
    }
}