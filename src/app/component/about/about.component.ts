import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Data: any;
  constructor(public commanService: CommanService) { }
  ngOnInit(): void {
    this.commanService.notificationSubject.subscribe(Res => {
      this.Data = Res;
      console.log(this.Data);
      console.log(Res);
    })
  }

}
