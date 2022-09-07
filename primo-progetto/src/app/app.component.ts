import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primo-progetto';

  //Se avessi messo e: any potevo evitare HTMLInputElement, ho fatto un casting
  onInput(e: Event){
    console.log((<HTMLInputElement>e.target).value);
  }
}
