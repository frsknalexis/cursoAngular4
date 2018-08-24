import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({

    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls:['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor(){
        this.titulo = 'Esta es la Tienda';
    }
    
    ngOnInit(){
        $('#textojq').hide();
        $('#buttonjq').click(function(){
            console.log("click desde JQuery");
            $('#textojq').slideToggle();
        });

        $('#caja').dotdotdot();
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event;
    }
}