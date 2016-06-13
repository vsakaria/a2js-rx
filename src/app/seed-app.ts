import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@Routes([
  { path: '/e24', component: RepoBrowser },
])
export class SeedApp {

  constructor() {}

}
