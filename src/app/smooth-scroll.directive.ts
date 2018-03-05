import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  scrollTarget(): void {

    const ele: HTMLElement = document.getElementById('demo');
  }
}
