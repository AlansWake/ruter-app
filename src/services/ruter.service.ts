import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RuterRealTime } from '../app/shared/ruter-real-time';

@Injectable()
export class RuterService {

  private ruterUrl = 'http://reisapi.ruter.no/';


  private headers = new Headers({'Accept': 'application/json'});

  constructor(private http: Http) { }

  getRealTime(id: string): Observable<RuterRealTime[]> {
    console.log(this.ruterUrl + 'StopVisit/GetDepartures/' + id);

    return this.http.get(this.ruterUrl + 'StopVisit/GetDepartures/' + id, {headers: this.headers})
                    .map(this.extractData);

  }
  private extractData(res: Response) {
    const body = res.json() as RuterRealTime[];
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
