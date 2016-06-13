import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs';

@Injectable()

export class Github {
  constructor(private http: Http) {}

  getQuestionsPromise() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3001/db`;

    return this.http.get(urlDev).toPromise()
      .then(this.log);
  }

  log(data) {
    console.log(data.json());
  }

  getQuestionsObservable() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3001/db`;

    console.log('Observalble wrapper called');

    return this.http.get(urlDev)
        .map((res) => res.json().questionsInformation.questions);
  }
}
