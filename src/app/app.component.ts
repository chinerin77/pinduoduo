import { Component, ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { tabItem } from './share/domain';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route:Router, private router:ActivatedRoute) { }
  selectedTabItem:tabItem | undefined;
  //selectedTabItem$: Observable<string> | undefined;
  selectedItem$ = 'home';

  ngOnInit() {
  }

  handleSelectedTab(tab:tabItem){
  this.selectedTabItem = tab;
  this.route.navigate([this.selectedTabItem.link]);
  this.selectedItem$ = this.selectedTabItem.link;

  
  }

  

}
