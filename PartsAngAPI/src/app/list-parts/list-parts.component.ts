import { Component, OnInit } from '@angular/core';
import { ComputerParts } from '../computer-parts';
import { PartsApiService } from '../parts-api.service';

@Component({
  selector: 'app-list-parts',
  templateUrl: './list-parts.component.html',
  styleUrls: ['./list-parts.component.css']
})
export class ListPartsComponent implements OnInit {

  allparts: ComputerParts [] = [];

  constructor(private partsapi: PartsApiService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.partsapi.listParts(
      (results: any) => {
        this.allparts = results;
      }
    );
  }

  addPart(part: ComputerParts){
    this.partsapi.addPart(part,
      () => {
        this.refreshList();
      });
  }

  deletePart(id: number) {
    this.partsapi.deletePart(
      id, () => {
        this.refreshList();
      }
    )
  }

}
