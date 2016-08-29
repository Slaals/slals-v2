/* beautify ignore:start */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
/* beautify ignore:end */

@Component({
    selector: 'squarenav',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    directives: [ROUTER_DIRECTIVES]
})
export class SquarenavComponent {

  constructor(public router: Router) { }

  isInHome(): boolean {
    if(!this.router.currentInstruction) return true;
    let current: string = this.router.currentInstruction.component.routeName;
    console.log('lol', current);
    return current == 'Home';
  }
}
