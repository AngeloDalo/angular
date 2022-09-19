import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultColor = ''

  constructor(private element: ElementRef) {
    //sfondo elemento giallo
    // this.element.nativeElement.style.backgroundColor = 'yellow'
  }

  //gestione passaggio del mouse
  //creiamo dei metodi
  @HostListener('mouseenter') onMouseEnter () {
    this.cambiaColore(this.appHighlight || this.defaultColor)
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.cambiaColore('transparent')
  }
  cambiaColore(colore: string){
    this.element.nativeElement.style.backgroundColor = colore
  }


}
