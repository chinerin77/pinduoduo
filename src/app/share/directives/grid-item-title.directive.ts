import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit { 
  @HostBinding('style.font-size')  @Input() appGridItemTitle='2rem'
    @HostBinding('style.grid-area') gridArea='title';
    constructor(private elr:ElementRef, private rd2:Renderer2){
    }
    ngOnInit(): void {
        //this.rd2.setStyle(this.elr.nativeElement, 'font-size',this.appGridItemTitle);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //this.rd2.setStyle(this.elr.nativeElement,'grid-area','title');
    }
}