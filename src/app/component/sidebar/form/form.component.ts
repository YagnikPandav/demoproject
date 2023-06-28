import { Component, OnInit } from '@angular/core';
import { Register } from './form.modal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  register = new Register();
  getLocal: any;
  users: Register[] = []
  constructor() { }

  ngOnInit(): void {
  }

  Register() {

    var name: any = [];
    name = this.register;
    localStorage.setItem('Data', JSON.stringify(name));
  }

}
