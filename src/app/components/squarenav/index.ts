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
  isActive(routes: string[]): boolean {
    let active: boolean = false;
    if(!this.router.currentInstruction) return false;
    let currentRoute: string = this.router.currentInstruction.component.routeName;
    routes.forEach(function(route: string) {
      if(currentRoute === route) active = true;
    });
    return active;
  }

  backHome(): void {
    this.router.navigate(['/']);
  }

}
