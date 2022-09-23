import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  // getPersona(arg0: number): any {
  //   throw new Error('Method not implemented.');
  // }

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "marco", cognome: "verde", isOnline: false},
  ]

  getPersone() {
    return this.persone
  }
  getPersona(index: number){
    return this.persone[index]
  }

  constructor() { }
}
