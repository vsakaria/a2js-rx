import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs';

@Injectable()

export class Github {
  constructor(private http: Http) {}

  getOrg(org: string) {
    return this.makeRequest(`orgs/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  getRepoForOrg(org: string, repo: string) {
    debugger;
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  getQuestionsPromise() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3001/db`;

    return this.http.get(urlDev).toPromise()
      .then(this.consoleT);
  }

  consoleT(data) {
    console.log(data.json());
  }

  getQuestionsObservable() {
    let urlDev = `https://uk.dev.experthealth.local/api/questionnaire/member`;
    let urlLoc = `http://localhost:3001/db`;

    console.log('Observalble wrapper called');

    return this.http.get(urlDev)
        .map((res) => res.json().questionsInformation.questions);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
