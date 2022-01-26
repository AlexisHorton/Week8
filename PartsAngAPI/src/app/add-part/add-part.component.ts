import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComputerParts } from '../computer-parts';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {

  newpart: ComputerParts = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0
  }

  @Output() addpart: EventEmitter<ComputerParts> = new EventEmitter<ComputerParts>();

  constructor() { }

  ngOnInit(): void {
  }

  addPart(){
    this.addpart.emit(this.newpart);
  }

}
