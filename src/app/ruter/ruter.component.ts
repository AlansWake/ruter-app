import { Component, OnInit, Input } from '@angular/core';

import { RuterService } from '../ruter.service';

@Component({
  selector: 'app-ruter',
  templateUrl: './ruter.component.html',
  styleUrls: ['./ruter.component.css']
})
export class RuterComponent implements OnInit {

  realTime: RuterRealTime[];

  realTimeNumbers: number[];

  currentTime = new Date(); // do the same with the ruter date, and subtract, and lastly reformat

  errorMessage: string;

  @Input() ruter: Ruter;

  constructor(private ruterService: RuterService) { }

  ngOnInit(): void {

    this.getRealTime();

  }

  getRealTime() {

    this.ruterService.getRealTime(this.ruter.id)
        .subscribe(response => this.realTime = response.slice(0, 10),
        error => this.errorMessage = <any>error);
  }

  dateConvert() {
    for (let index = 0; index < this.realTime.length; index++) {
      this.realTime[index].MinutesToDeparture
      = Math.floor((new Date(this.realTime[index].MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime).getTime()
      - new Date(this.realTime[index].RecordedAtTime).getTime()) / 60000);
    }
  }

}

class Ruter {
  id: string;
  name: string;
}

export class RuterRealTime {
  MinutesToDeparture: number;
  RecordedAtTime: string;
  MonitoredVehicleJourney: {
    PublishedLineName: string;
    DirectionName: string;
    MonitoredCall: {
      DestinationDisplay: string;
      ExpectedDepartureTime: string;
      DeparturePlatformName: string;
    };
  };
}
