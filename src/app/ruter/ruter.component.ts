import { Component, OnInit, Input } from '@angular/core';

import { RuterService } from '../ruter.service';

@Component({
  selector: 'app-ruter',
  templateUrl: './ruter.component.html',
  styleUrls: ['./ruter.component.css']
})
export class RuterComponent implements OnInit {

  realTime: Object[];

  currentTime = new Date(); // do the same with the ruter date, and subtract, and lastly reformat

  errorMessage: string;

  @Input() id: string;

  constructor(private ruterService: RuterService) { }

  ngOnInit(): void {

    this.getRealTime();

  }

  getRealTime() {

    this.ruterService.getRealTime(this.id)
        .subscribe(response =>this.realTime = response,
        error => this.errorMessage = <any>error);

  }

}
