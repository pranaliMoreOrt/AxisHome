import { Directive, OnInit, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective  implements OnInit {

  currencyChars = new RegExp('[\.,]', 'g'); // we're going to remove commas and dots

  constructor(public el: ElementRef, public renderer: Renderer2, private decimalPipe: DecimalPipe) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('input', ["$event.target.value"]) onInput(e: string) {
    this.format(e);
  };

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    this.format(event.clipboardData.getData('text/plain'));
  }

  // @HostListener('blur', ['$event']) onBlur(e: string) {
  //   // event.preventDefault();
  //   this.format(e);
  // }

  // @HostListener('focus', ['$event']) onFocus(e: string) {
  //   // event.preventDefault();
  //   this.format(e);
  // }

  @HostListener('change', ['$event.target.value']) onChanges(e: string) {
    console.log('Something has changed');
    this.format(e);
  }

  format(val:string) {
    // 1. test for non-number characters and replace/remove them
    const numberFormat = parseInt(String(val).replace(this.currencyChars, ''));
    // console.log(numberFormat); // raw number

    // 2. format the number (add commas)
    const usd = this.decimalPipe.transform(numberFormat, '1.0-0', 'en-IN');

    // 3. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', usd);
  }

}
