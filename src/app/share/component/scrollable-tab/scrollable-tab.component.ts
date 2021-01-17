import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

interface Dict {
  [key: string]: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, OnChanges{

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  
  }

  title = '拼多多';
  seletedIndex = -1;

@Input() menus: TopMenu[] = [];
@Input() backgroundColor = 'pink';
@Output() tabSelected = new EventEmitter();
@Input() titleActiveColor= 'red';
@Input() titleColor= 'black';
@Input() indicatorColor='brown';


  handleSelection(index: number) {
    this.seletedIndex = index;
    this.tabSelected.emit(this.menus[this.seletedIndex]);
  

  }

}
