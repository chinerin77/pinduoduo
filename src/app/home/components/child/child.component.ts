import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewChecked {
  _title;
  _time:any;
  @ViewChild('timeRef', { static: true })
  timeRef!: ElementRef;

  public get time(): number {
    return this._time;
  }

  constructor(private ngZone:NgZone, private rd2:Renderer2) { this._title = 'hi'; }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.rd2.setProperty(this.timeRef.nativeElement,'innerText',Date.now())
      }, 100);
    });
  }


  handleClick(){
    console.log('触发了') ;
  }

}
