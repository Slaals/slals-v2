/* beautify ignore:start */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
/* beautify ignore:end */

@Component({
    selector: 'squarenav',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    directives: [...ROUTER_DIRECTIVES]
})
export class SquarenavComponent {

  constructor(public router: Router) { }

  /**
   * Uh... Router in beta - native routerLinkActive not available, gratz.
   */
  isActive(route: string): boolean {
    return this.router.parent.currentInstruction.component.routeName === route;
  }

}
