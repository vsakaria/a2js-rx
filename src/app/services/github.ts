import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs';

@Injectable()

export class Github {
  constructor(private http: Http) {}

  getQuestionsPromise() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3001/db`;
    let fb = 'https://test-json-vishal.firebaseio.com/id'

    return this.http.get(fb).toPromise()
      .then(this.log);
  }

  log(data) {
    debugger;
    console.log(data.json());
  }

  getQuestionsObservable() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3008/questionsInformation`;

    console.log('Observalble wrapper called');

    return this.http.get(urlLoc)
        .map((res) => res.json().questions);
  }
}
