/* beautify ignore:start */
import {Component} from '@angular/core';
import {SquarenavComponent} from '../squarenav';
/* beautify ignore:end */

@Component({
    selector: 'home',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    directives: [SquarenavComponent]
})
export class HomeComponent {

}
