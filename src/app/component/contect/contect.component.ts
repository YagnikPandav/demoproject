import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.scss']
})
export class ContectComponent implements OnInit {

  constructor(
    public commanService: CommanService
  ) { }

  ngOnInit(): void {
  }

  sendData(data: any) {
      console.log(data.value);
    this.commanService.sendNotification(data.value)
  }



}
