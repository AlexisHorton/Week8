import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComputerParts } from '../computer-parts';

@Component({
  selector: 'app-one-computer-part',
  templateUrl: './one-computer-part.component.html',
  styleUrls: ['./one-computer-part.component.css']
})
export class OneComputerPartComponent implements OnInit {

  @Input() part: ComputerParts | undefined = undefined;

  @Output() deleteme : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteEvent(){
    this.deleteme.emit(this.part?.id)
  }

}
