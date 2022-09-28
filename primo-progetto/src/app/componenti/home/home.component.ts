import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //REACTIVE FORM
  homeform!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }

  //REACTIVE FORM
  onSubmit() {
    console.log(this.homeform)
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

}
