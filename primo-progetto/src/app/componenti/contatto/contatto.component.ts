import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {
  id: number | undefined
  persona: any

  constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService) { }

  ngOnInit(): void {
    //ROUTING CHILDREN PER CARICARE SOTOCOMPONENTI
    this.route.paramMap.subscribe((paramas: ParamMap)=>{
      this.id = +paramas.get('id')!
      this.persona = this.servizioProva.getPersona(this.id)
    })
  }

}
