import { Component } from '@angular/core';
import { BandAPIService } from './band-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DBFront';

  constructor(private bandapi: BandAPIService) {}

  test(){
    this.bandapi.getAll(
      (results: any) => {
        console.log(results);
      }
    )
  }
}
