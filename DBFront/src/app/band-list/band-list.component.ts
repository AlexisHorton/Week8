import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandAPIService } from '../band-api.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  allbands: Band[] = [];
  constructor(private bandapi: BandAPIService) { }

  ngOnInit(): void {
    this.refreshList();
    console.log(this.allbands);
  }

  refreshList() {
    this.bandapi.getAll(
      (results: any) => {
        this.allbands = results;
      }
    )
  }

  deleteBand(id: number) {
   this.bandapi.delete(
     id,
     () => {
          this.refreshList();
     }
   );
  }

  addBand(band: Band) {
    this.bandapi.add(band,
      () => {
        this.refreshList();
      })
  }

}
