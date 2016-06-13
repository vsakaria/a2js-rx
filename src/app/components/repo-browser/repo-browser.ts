import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {RepoList} from '../repo-list/repo-list';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-browser',
  templateUrl: 'app/components/repo-browser/repo-browser.html',
  styleUrls: ['app/components/repo-browser/repo-browser.css'],
  providers: [ Github ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})

@Routes([
  { path: '/',       component: RepoList,  }
])

export class RepoBrowser {

  constructor(private router: Router, private github: Github) {}

  getQuestionsPromise() {
    this.github.getQuestionsPromise()
  }

  getQuestionsObservable() {
    this.github.getQuestionsObservable()
  }
}
