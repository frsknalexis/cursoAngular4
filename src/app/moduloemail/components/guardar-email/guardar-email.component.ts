import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'guardar-email',
    template: `
        <h4>{{title}}</h4>

        <input type="text" [(ngModel)]="emailContacto"/>
        <button (click)="guardarEmail()">Guardar email</button>
    `
})
export class GuardarEmailComponent implements OnInit {

    title = 'Guardar Email';
    emailContacto: string;

    ngOnInit(){
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    guardarEmail(){
        localStorage.setItem('emailContacto', this.emailContacto);
    }
}