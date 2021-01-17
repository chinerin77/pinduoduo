import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit{ 
    @Input() appGridItemImage ='2rem';
    @Input() fitMode = 'cover'
    @HostBinding('style.grid-area') gridArea='image';
    // @HostBinding('style.width') widthImage = this.appGridItemImage;
    // @HostBinding('style.height') heightImage=this.appGridItemImage;
    // @HostBinding('style.object-fit') objectFit=this.fitMode;


    constructor(private elr:ElementRef, private rd2:Renderer2){
    }
ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.rd2.setStyle(this.elr.nativeElement,'grid-area','image');
    this.rd2.setStyle(this.elr.nativeElement,'width',this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement,'height',this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement,'object-fit',this.fitMode);
}

@HostListener('click',['$event.target'])
    handleClick(ev: any){
        console.log(ev)

    }
}