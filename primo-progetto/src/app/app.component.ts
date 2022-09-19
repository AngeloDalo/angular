import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'prova-angular';
  isVisible = true;
  numero = 3;
  color = 'green';
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "marco", cognome: "verde", isOnline: false},
  ]

  //VARIABILE TEMPLATE
  //inputSaluti si chiama valoreInput
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>
  ngAfterViewInit(): void {
    console.log(this.valoreInput.nativeElement.value)
  }
  onClick3(){
    console.log(this.valoreInput.nativeElement.value)
  }

  //Se avessi messo e: any potevo evitare HTMLInputElement, ho fatto un casting
  onInput(e: Event): void{
    this.title = ((<HTMLInputElement>e.target).value);
  }

  onClick(e: Event){
    this.title = "ho cliccato sul bottone";
  }

  //PARENT TO CHILD
  onClick2(){
    this.persone = [
      {nome: "1", cognome: "rossi", isOnline: true},
      {nome: "2", cognome: "neri", isOnline: true},
      {nome: "3", cognome: "verde", isOnline: false},
    ]
  }

  //CHILD TO PARENT
  onRiceviDati(value: string) {
    console.log(value)
  }

  //CREARE DIRETTIVE
  colore = ''
  cambiaColore(colore: string) {
    this.colore = colore
  }

  //FUNZIONI PIPE
  titolo = "corso angulare"
  oggi = Date.now()
  number = 5
}
