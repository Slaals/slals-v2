/* beautify ignore:start */
import {Component} from '@angular/core';
import {SquarenavComponent} from '../squarenav';
import {OnDeactivate} from '@angular/router-deprecated';
import {HeyNav} from '../../directives/hey-nav.directive';
/* beautify ignore:end */

@Component({
    selector: 'about',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    directives: [SquarenavComponent, HeyNav]
})
export class AboutComponent {

  public state: string = 'active';

  switchState(): any {
    if(this.state === 'active') this.state = 'inactive';
    else this.state = 'active';
  }

  routerOnDeactivate(): any {
    this.switchState();
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve(true);
      }, 1000);
    });
  }

}
