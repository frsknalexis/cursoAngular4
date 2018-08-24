import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html'
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    @Input() nombre: string;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque Nacional de Huachipa';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }

    ngOnChanges(changes: SimpleChanges){
       // console.log(changes);
       console.log("Existen Cambios en las propiedades");
    }

    ngOnInit(){
        console.log("Métódo OnInit Lanzado");
    }

    ngDoCheck(){
        console.log("El DoCheck se ha Lanzado");
    }

    ngOnDestroy(){
        console.log("Se va a eliminar el Componente");
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto 
        });
    }
}