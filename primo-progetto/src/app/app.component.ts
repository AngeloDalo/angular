import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-angular';

  //Se avessi messo e: any potevo evitare HTMLInputElement, ho fatto un casting
  onInput(e: Event){
    this.title = ((<HTMLInputElement>e.target).value);
  }

  onClick(e: Event){
    this.title = "ho cliccato sul bottone";
  }
}
