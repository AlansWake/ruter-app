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

  ruterIds = ['3010370', '3010371'];

  constructor(private ruterService: RuterService ) {
  }

  ngOnInit() {

  }
}
