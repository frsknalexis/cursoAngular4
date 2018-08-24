import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
    
    title = 'Contacto';
    emailContacto: string;

    ngOnInit(){
        console.log("contact.component  Cargado");
    }

    guardarEmail(){
       localStorage.setItem('emailContacto', this.emailContacto);
    }
}