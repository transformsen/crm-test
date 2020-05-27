import {ElementRef} from '@angular/core';

/**
 * return element from elementRef or HTMLElement
 * @param elementRef elementRef
 */
export function getElement<T = HTMLElement>(elementRef: ElementRef<T> | T): T {
  if (elementRef) {
    if (elementRef instanceof ElementRef) {
      // if instanceof ElementRef, get nativeElement
      if (elementRef.nativeElement) {
        return elementRef.nativeElement as T;
      }
    } else {
      // if not instance of ElementRef, just return
      return elementRef as T;
    }
  }
}
