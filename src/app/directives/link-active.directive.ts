import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appLinkActive]'
})
export class LinkActiveDirective {
  isActive = input<Boolean | undefined>(false);
  el = inject(ElementRef);
  styleEffect = effect(() => {
    if (this.isActive()) {
      this.el.nativeElement.style.backgroundColor = '#4E4E58';
      this.el.nativeElement.style.color = '#fff';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.color = '#BABABA';
    }
  })
  constructor() { }

}
