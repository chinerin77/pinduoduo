import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit{ 
    @HostBinding('style.display') display ='grid';
    @HostBinding('style.grid-template-areas') template= `'image' 'title'`;
    @HostBinding('style.place-items') placeItems='center';
    @HostBinding('style.width') width='4rem';

    constructor(private elr:ElementRef, private rd2:Renderer2){
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //this.rd2.setStyle(this.elr.nativeElement,'display','grid');
        //this.rd2.setStyle(this.elr.nativeElement,'grid-template-areas',`'image' 'title'`);
        // this.rd2.setStyle(this.elr.nativeElement,'place-items','center');
        // this.rd2.setStyle(this.elr.nativeElement,'width','4rem');
    }
    
}