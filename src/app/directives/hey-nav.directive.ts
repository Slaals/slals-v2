/* beautify ignore:start */
import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';
/* beautify ignore:end */

@Directive({
  selector: '[hey-nav]'
})
export class HeyNav {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input('hey-nav') hey: string;
  @Input('state') set onStatechange(state: string) {
    switch(this.hey) {
      case 'home':
        this.animateHome(state);
        break;
      case 'about':
        this.animateAbout(state);
        break;
    }
  }

  private animateHome(state: string): void {
    let mainEl = this.el.nativeElement.children[0].children[0];

    if(state === 'active') {
      mainEl.style.height = 150 * 2.1;
      mainEl.style.width = 150 * 2.1;
    } else {
      this.expand(mainEl);
    }
  }

  private animateAbout(state: string): void {
    let mainEl = this.el.nativeElement.children[0].children[0];

    this.expand(mainEl);

    let el = mainEl.children[0].children[0];

    if(state === 'active') {
      setTimeout(function() {
        el.style.top = '280px';
        el.style.left = '115px';
      }, 150);

    } else {

    }
  }

  private expand(nav): void {
    nav.style.height = '100%';
    nav.style.width = '100%';
  }

}
