import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/share';

@Component({
  selector: 'app-h-container',
  templateUrl: './h-container.component.html',
  styleUrls: ['./h-container.component.css']
})
export class HContainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  title = 'pinduoduo';
  @ViewChild('imageSlider')
  imageSlider!: ImageSliderComponent;

  topMeues: TopMenu[]=[
    {title:'热门',
    link:'hot',
    id:1 },

    {title:'男装',
    link:'men',
    id: 2},

    {title:'百货',
    link:'department',

    id:3},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''}
  ];



  scrollableColor = 'grey';

  

  handleTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link])
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.imageSlider);
    
  }


  username='';
}
