import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/share';
import { Ad, Product } from 'src/app/share/domain';
import { environment } from 'src/environments/environment';
import { user } from '../home-grand'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  ad: Ad | undefined;
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<user[]>(`${environment.baseUrl}/users`);
  }

  topMeues: TopMenu[] = [
    {
      title: '热门',
      link: 'hot',
      id: 1
    },

    {
      title: '男装',
      link: 'men',
      id: 2
    },

    {
      title: '百货',
      link: 'department',

      id: 3
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '男装',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1379405831,3144592632&fm=15&gp=0.jpg',
      link: '',
      caption: ''
    },

    {
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608365596599&di=47edcbc640e22cab55c29e268ae347aa&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D01bd4094b97eca80120539efa1229712%2Facfb47ed2e738bd400b05486a88b87d6267ff940.jpg',
      link: '',
      caption: ''
    },

    {
      imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2995562500,4253564678&fm=26&gp=0.jpg',
      link: '',
      caption: ''
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

  ads: Ad[] = [
    {
      imageUrl: "/assets/avatars/avatar001.png",
      link: "",
      tab: "hot"
    },
    {
      imageUrl: "/assets/avatars/avatar002.png",
      link: "",
      tab: "men"
    },
    {
      imageUrl: "assets/avatars/avatar003.png",
      link: "",
      tab: "department"
    }


  ];

  products: Product[]=[
    {
      imageLink:'/assets/avatars/avatar001.png',
      title:'bag',
      tags:['woman','fashion','brand'],
      price:70000,
      id:1,
      typeId:1
    },
    {
      imageLink:'/assets/avatars/avatar002.png',
      title:'shirt',
      tags:['woman','fashion','brand'],
      price:60000,
      id:2,
      typeId:1
    },
    {
      imageLink:'/assets/avatars/avatar003.png',
      title:'hat',
      tags:['woman','fashion','brand'],
      price:50000,
      id:3,
      typeId:1
    },
    {
      imageLink:'/assets/avatars/avatar004.png',
      title:'shoes',
      tags:['woman','fashion','brand'],
      price:70000,
      id:4,
      typeId:2
    }
  ]

  getTapMenu() {
    return this.topMeues;
  }

  getImageSlide() {
    return this.imageSliders;
  }

  getChannel() {
    return this.channels;
  }
  getAdByTab(tab: string):Ad {
    this.ad = this.ads.find((element) => { return  element.tab == tab  });
    console.log("ad is " + this.ad);
    this.ad == undefined ? this.ad = this.ads[0] : this.ad;
    return this.ad;
  }

  getProduct(){
    return this.products;
  }


}