import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise(resole => {
      setTimeout(() => {
        resole('promise working ')
      }, 2000);
    })

    promise.then(Reesult => { console.log(Reesult); })

    const observable = new Observable(Res => {
      setTimeout(() => {
        Res.next('obsservable working')
      }, 2000);
    })

    observable.subscribe(Reesult => { console.log(Reesult); })

  }

}
