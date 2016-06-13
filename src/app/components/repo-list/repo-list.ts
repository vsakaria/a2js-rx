import {Component} from '@angular/core';
import {Github} from '../../services/github';
import {Observable} from 'rxjs/Observable';
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})

export class RepoList {
  repos: Observable<any>;
  questions: Observable<any>;
  constructor(public github: Github, public params: RouteSegment) {}

  ngOnInit() {
    this.questions = this.github.getQuestionsObservable();

    this.github.getQuestionsObservable()
        .subscribe((questions) => console.log(questions));
  }
}
