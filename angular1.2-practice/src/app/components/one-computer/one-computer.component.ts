import {Component, Input, OnInit} from '@angular/core';
import {Computers} from "../../moduls/Computers";

@Component({
  selector: 'app-one-computer',
  templateUrl: './one-computer.component.html',
  styleUrls: ['./one-computer.component.css']
})
export class OneComputerComponent implements OnInit {
@Input()
computer:Computers;
  constructor() { }

  ngOnInit(): void {
  }

}
