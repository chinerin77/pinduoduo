import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/share';
import { HomeService, token } from '../services';

@Component({
  selector: 'app-h-container',
  templateUrl: './h-container.component.html',
  styleUrls: ['./h-container.component.css']
})
export class HContainerComponent implements OnInit {

  constructor(private router:Router,private services: HomeService,
    @Inject(token) private baseUrl:string) { }

  title = 'pinduoduo';
  @ViewChild('imageSlider')
  imageSlider!: ImageSliderComponent;
  topMeues: TopMenu[]=[];

  scrollableColor = 'grey';

  
  ngOnInit() { 
    this.topMeues = this.services.getTapMenu();
    //console.log(this.baseUrl);
  }


  handleTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link])
  }


  ngAfterViewInit(): void {
    
    //console.log(this.imageSlider);
    
  }


  username='';
}
