import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  getData: any;
  address: any;
  company: any;
  constructor(public commanService: CommanService) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser() {
    this.commanService.getProduceData().subscribe(Res => {
      if (Res) {
        this.getData = Res;
        this.company = Res;
        console.log(this.company);
        this.address = Res;
        console.log(this.address);
      }
    })

  }

}
