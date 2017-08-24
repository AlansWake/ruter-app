import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { RuterItemComponent } from '../ruter-item/ruter-item.component';

import { RuterService } from '../../services/ruter.service';
import { RealtimeConvertService } from '../../services/realtime-convert.service';

import { RuterRealTime } from '../shared/ruter-real-time';
import { PerfectRealTime, Direction, Line } from '../shared/perfect-real-time';
import { OriginalRuterData } from '../shared/original-ruter-data';

@Component({
  selector: 'app-ruter',
  templateUrl: './ruter.component.html',
  styleUrls: ['./ruter.component.css']
})
export class RuterComponent implements OnInit {

  realTime: RuterRealTime[];

  perfectTime: PerfectRealTime;

  realTimeNumbers: number[];

  currentTime = new Date(); // do the same with the ruter date, and subtract, and lastly reformat

  errorMessage: string;

  @Input() ruter: Ruter;

  constructor(private ruterService: RuterService, private realtimeConvertService: RealtimeConvertService) { }

  ngOnInit(): void {
/*
    let timer = Observable.timer(0,60000);
    timer.subscribe(t=> {
        this.currentTime = new Date();
        this.getRealTime();
    });*/
    this.currentTime = new Date();
    this.getRealTime();

  }

  getRealTime() {

    this.ruterService.getRealTime(this.ruter.id)
        .subscribe(response => {
          let med = response;
          med = this.dateConvert(med);
          this.perfectTime = this.convertRealTime(med);
          this.realTime = med;
        },
        error => this.errorMessage = <any>error);
  }

  dateConvert(obj: RuterRealTime[]) {
    // console.log('date entered');
    if (obj) {
      // console.log('date date run');
    for (let index = 0; index < obj.length; index++) {
      obj[index].MinutesToDeparture
      = Math.floor((new Date(obj[index].MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime).getTime()
      - new Date(obj[index].RecordedAtTime).getTime()) / 60000);
    }
    return obj;
    }

  }

  convertRealTime(obj: RuterRealTime[]): PerfectRealTime {
    return this.realtimeConvertService.convertRealTime(obj);
  }

}

class Ruter {
  id: string;
  name: string;
}
