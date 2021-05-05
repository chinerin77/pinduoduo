import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ImageSlider, Channel } from 'src/app/share';
import { Ad, Product } from 'src/app/share/domain';
import { HomeService } from '../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private services:HomeService, private cd:ChangeDetectorRef ) { }
  
  imageSliders: ImageSlider[]=[];
  channels: Channel[] = [];
  ad$:Observable<Ad>;
  selectedTabLink$: Observable<string> ;
  products:Product[]=[];



  ngOnInit():void{
  
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );

    this.channels = this.services.getChannel();
    this.imageSliders = this.services.getImageSlide();
    //this.selectedTabLink$ = this.route.paramMap.pipe(
    this.ad$ = this.selectedTabLink$.pipe(map(tab =>this.services.getAdByTab(tab)));  
    console.log("ad$ is"+this.ad$);
    this.products= this.services.getProduct();
  }

}
