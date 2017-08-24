import { Component, Input, OnInit } from '@angular/core';
import { PerfectRealTime, Direction, Line } from '../shared/perfect-real-time';

@Component({
  selector: 'app-ruter-item',
  templateUrl: './ruter-item.component.html',
  styleUrls: ['./ruter-item.component.css']
})
export class RuterItemComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() recordTime: Date;
  @Input() realTime: PerfectRealTime;

  constructor() { }

  ngOnInit() {
  }

}
