import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from './share';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor() { }

  ngOnInit() {
  }

  title = 'pinduoduo';
  @ViewChild('imageSlider')
  imageSlider!: ImageSliderComponent;

  topMeues: TopMenu[]=[
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
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''},
    {title:'男装',
    link:''}
  ];


  imageSliders: ImageSlider[]=[
    { imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1379405831,3144592632&fm=15&gp=0.jpg',
      link: '',
      caption: ''},

      { imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608365596599&di=47edcbc640e22cab55c29e268ae347aa&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D01bd4094b97eca80120539efa1229712%2Facfb47ed2e738bd400b05486a88b87d6267ff940.jpg',
      link: '',
      caption: ''} ,

      {imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2995562500,4253564678&fm=26&gp=0.jpg',
      link:'',
      caption:''
      }


  ];


  channels: Channel[] = [
    {
      id: 1,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 2,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 3,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 4,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 5,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 6,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 7,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 8,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    },
    {
      id: 1,
      title: '秒杀',
      icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371761928,2386125753&fm=26&gp=0.jpg",
      link: ""
    }

  ];
  scrollableColor = 'grey';

  

  handleTabSelected(topMenu:TopMenu){
    console.log(topMenu);
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.imageSlider);
    
  }


  username='';

}
