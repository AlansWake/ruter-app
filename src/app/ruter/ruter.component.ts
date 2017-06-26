import { Component, OnInit, Input } from '@angular/core';

import { RuterService } from '../ruter.service';
import { RealtimeConvertService } from '../realtime-convert.service';

import { RuterRealTime } from '../ruter-real-time';
import { PerfectRealTime, Direction, Line } from '../perfect-real-time';

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

    this.getRealTime();

  }

  getRealTime() {

    this.ruterService.getRealTime(this.ruter.id)
        .subscribe(response => {
          let med = response.slice(0, 10);
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
