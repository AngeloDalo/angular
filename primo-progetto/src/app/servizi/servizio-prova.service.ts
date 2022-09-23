import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "marco", cognome: "verde", isOnline: false},
  ]

  getPersone() {
    return this.persone
  }
  gerPersona(index: number){
    return this.persone[index]
  }

  constructor() { }
}
