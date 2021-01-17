import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'events';
// import { Confirmable, Emoji } from '../../decorators';

export interface Channel {
  id: number,
  icon: string,
  title: string,
  link: string

}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  [x: string]: any;

  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  //templateColumns="repeat(5,50px)";
  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem)/${this.displayCols}))`;

  }


  // public get templateColumns(): string {
  //   return `repeat(${this.cols},calc((100vw-${this.displayCols * 0.4}rem)/${this.displayCols}))`
  // }


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }


  handleScroll(ev:any) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`

  }

}
