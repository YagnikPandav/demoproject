import { Component } from '@angular/core';
import { CommanService } from './services/comman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public commanService: CommanService) { }
  
  title = 'MyProject';
}
