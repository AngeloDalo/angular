import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, OnChanges {
//export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {
  //STRING INTERPOLATION
  nomecane = "roger"
  cani = [
    {nome: 'roger',
    razza: 'golden',
    descrizione: 'cane normale'}
  ]

  //PROPERTY BINDING
  isDisabled = true
  immagine = ''
  immagine1 = 'https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  //CHILD TO PARENT
  @Output() mandaDatiEvento = new EventEmitter<string>()
  nome = 'Luca'
  mandaDati() {
    this.mandaDatiEvento.emit(this.nome)
  }

  //SERVICE
  constructor(private servizioProva: ServizioProvaService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //PARENT TO CHILD
    console.log(this.data)
  }

  //PARENT TO CHILD
  @Input() data: any;

  ngOnInit(): void {
    //PROPERTY BINDING
    console.log("ngOnInit")
    setInterval(()=>{
      this.isDisabled = !this.isDisabled
    }, 2000)
    let counter = 0
    setInterval(()=>{
      if(counter%2==0){
        this.immagine = this.immagine1
      } else {
        this.immagine = this.immagine2
      }
      counter++
    }, 2000)
    //PARENT TO CHILD
    console.log(this.data)
    //SERVICE
    console.log(this.servizioProva.persone)
  }

}
