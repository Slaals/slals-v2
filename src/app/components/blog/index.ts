/* beautify ignore:start */
import {Component} from '@angular/core';
import {OnDeactivate} from '@angular/router-deprecated';
/* beautify ignore:end */

@Component({
    selector: 'blog',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class BlogComponent {

}
