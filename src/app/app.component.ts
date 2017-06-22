import { Component, OnInit } from '@angular/core';

import { RuterComponent } from './ruter/ruter.component';

import { RuterService } from './ruter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ruterData = [{
    id: '3010370',
    name: 'Forskningsparken [T]'
  }, {
    id: '3010371',
    name: 'Forskningsparken'
  }, {
    id: '3010011',
    name: 'Jernbanetorget [T]'
  }];

  ruterIds = ['3010370', '3010371', '3010011'];
  ruterNames = ['Forskningsparken [T]', 'Forskningsparken', 'Jernbanetorget [T]'];
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private ruterService: RuterService ) {
  }

  ngOnInit() {

  }
}
