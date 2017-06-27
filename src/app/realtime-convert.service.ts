import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing/src/testing';
import { forEach } from '@angular/router/src/utils/collection';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RuterRealTime } from './ruter-real-time';
import { PerfectRealTime, Direction, Line } from './perfect-real-time';

@Injectable()
export class RealtimeConvertService {

  perfectTime: PerfectRealTime;

  constructor() { }

  public getPerfectTime() {
    if (this.perfectTime) { return this.perfectTime; }
  }

  public convertRealTime(obj: RuterRealTime[]): PerfectRealTime {
    // console.log('convert entered');
    if (obj) {

      console.log('convert run');
      let res = new PerfectRealTime;
  
      res.Name = 'test';
      res.Id = 0;
      res.RecordedAtTime = '';
      console.log('Object length: ' + obj.length);
      for (let i = 0; i < obj.length; i++) {
        //console.log('Object lineName: ' + obj[i].MonitoredVehicleJourney.PublishedLineName);
        // let direction = e.MonitoredVehicleJourney.DirectionName;

        // console.log('For loop?');
        res = this.realtime(obj[i], res);
      }
      this.perfectTime = res;
  
      return res;
    }
  }

  private realtime(obj: RuterRealTime, res: PerfectRealTime): PerfectRealTime {

    // console.log('First!');

    if (res.Directions) {
      for (let i = 0; i < res.Directions.length; i++) {
        if (res.Directions[i].Id === parseInt(obj.MonitoredVehicleJourney.DirectionName, 10)) {
          this.direction(obj, res.Directions[i]);
          // console.log('Direction ids match: ' + res.Directions[i].Id);
          return res;
        }
      };
    }
    if (res.Directions === undefined) { res.Directions = []; }
    
    res.Directions.push(this.direction(obj, new Direction));


    return res;
  }


  private direction(obj: RuterRealTime, res: Direction): Direction {

    if (res.Id === undefined) { res.Id = parseInt(obj.MonitoredVehicleJourney.DirectionName, 10); }

    if (res.Lines) {
      //console.log("hei");
      for (let i = 0; i < res.Lines.length; i++) {

        //console.log('Line: ' + res.Lines[i].Id + ' - new Id: ' + parseInt(obj.MonitoredVehicleJourney.PublishedLineName, 10));
        if (res.Lines[i].Name === obj.MonitoredVehicleJourney.PublishedLineName) {
          this.line(obj, res.Lines[i]);
          //console.log('Line ids: ' + res.Lines[i].Id);
          return res;
        }
      }
    }
    if (res.Lines === undefined) { res.Lines = []; }
    res.Lines.push(this.line(obj, new Line));

    return res;
  }

  private line(obj: RuterRealTime, res: Line): Line {

    if (res.Name === undefined) { res.Name = obj.MonitoredVehicleJourney.PublishedLineName; }
    if (res.Times === undefined) { res.Times = [];
    }

    res.Times.push({ Time: obj.MinutesToDeparture });

    // console.log('time convert');
    return res;
  }
}
