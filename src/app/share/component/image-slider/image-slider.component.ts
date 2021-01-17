import { ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {fromEvent} from 'rxjs';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @Input() sliders: ImageSlider[] = [];
  @ViewChildren('img')
  imgs!: QueryList<ElementRef>;
  @Input() sliderHeight = '300px';
  @Input() intervalBySeconds = 10;
  @ViewChild('imageSlider')
  imgSlider!: ElementRef;
  selectedIndex =0;
  intervalId: any;


  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    // console.log('ngOnInit',this.imgs);
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit',this.imgs);
    // this.imgs.forEach(item => item.nativeElement.style.height= '200px');
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let i = 0;
    setInterval(() => {
      this.intervalId=this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        ((this.getIndex(++this.selectedIndex) % this.sliders.length) *
          this.imgSlider.nativeElement.scrollWidth) /
        this.sliders.length
      );
    

    }, this.intervalBySeconds * 1000);

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number{
    return idx>=0 ?idx% this.sliders.length:this.sliders.length-(Math.abs(idx)%this.sliders.length)

  }

  handleScroll(ev:any){
    const radio =
    (ev.target.scrollLeft*this.sliders.length)/ev.target.scrollWidth;
    this.selectedIndex = Math.round(radio);
  }

}
