/* beautify ignore:start */
import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';
/* beautify ignore:end */

@Directive({
  selector: '[hey-nav]'
})
export class HeyNav {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  @Input('hey-nav') hey: string;
  @Input('state') set onStatechange(state: string) {
    switch(this.hey) {
      case 'home':
        this.animateHome(state);
        break;
      case 'about':
        this.animateAbout(state);
        break;
      case 'blog':
        this.animateBlog(state);
        break;
      case 'project':
        this.animateProject(state);
        break;
      case 'interests':
        this.animateInterests(state);
        break;
      default:
        this.animateHome(state);
        break;
    }
  }

  private animateHome(state: string): void {
    let that = this;
    let mainEl = this.el.nativeElement.children[0].children[0];

    if(state === 'active') {
      this.expand(mainEl);
      setTimeout(function() {
        that.resetEl(mainEl);
      }, 150);
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
      this.resetEl(el);
    }
  }

  private animateBlog(state: string): void {
    let mainEl = this.el.nativeElement.children[0].children[0];

    this.expand(mainEl);

    let el = mainEl.children[1].children[0];

    if(state === 'active') {
      setTimeout(function() {
        el.style.top = '280px';
        el.style.left = '100px';
      }, 150);
    } else {
      this.resetEl(el);
    }
  }

  private animateProject(state: string): void {
    let mainEl = this.el.nativeElement.children[0].children[0];

    this.expand(mainEl);

    let el = mainEl.children[2].children[0];

    if(state === 'active') {
      setTimeout(function() {
        el.style.top = '355px';
        el.style.left = '0';
      }, 150);
    } else {
      this.resetEl(el);
    }
  }

  private animateInterests(state: string): void {
    let mainEl = this.el.nativeElement.children[0].children[0];

    this.expand(mainEl);

    let el = mainEl.children[3].children[0];

    if(state === 'active') {
      setTimeout(function() {
        el.style.top = '355px';
        el.style.left = '100px';
      }, 150);
    } else {
      this.resetEl(el);
    }
  }

  private expand(nav): void {
    nav.style.height = '100%';
    nav.style.width = '100%';
  }

  private resetEl(el): void {
    el.removeAttribute('style');
  }

}
