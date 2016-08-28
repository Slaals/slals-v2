/// src/app/index.ts
import {Component, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import routes from './routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html'),
    encapsulation: ViewEncapsulation.None
})

@RouteConfig(routes)

export class App {
  constructor() {}
}
