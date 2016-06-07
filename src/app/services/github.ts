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
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  getQuestionsPromise() {
    let url = `http://localhost:3001/db`;
    //debugger
    return this.http.get(url).toPromise()
      .then(this.consoleT);
  }

  consoleT(data) {
    console.log(data.json());
  }

  getQuestionsObservable() {
    let url = `http://localhost:3001/db`;

    return this.http.get(url)
      .map(res => res.json())
      .map(json => json.questionsInformation)
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
