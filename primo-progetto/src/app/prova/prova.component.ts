import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {

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

  constructor() {
    console.log("costruttore")
  }

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
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
