import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { tabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //selectedItem=0;
  @Input() selectedItem = 'home'
@Output() selectedFootTab = new EventEmitter();
  tabItems : tabItem[]=[{
    title: "Home",
    link:"home",
    icon: "/assets/tabs/home.png",
    selectedIcon:"/assets/tabs/home_selected.png"

  },
  {
    title: "Recommend",
    link:"recommend",
    icon: "/assets/tabs/recommend.png",
    selectedIcon:"/assets/tabs/recommend_selected.png"

  },
  {
    title: "Category",
    link:"category",
    icon: "/assets/tabs/category.png",
    selectedIcon:"/assets/tabs/category_selected.png"

  },
  {
    title: "Chat",
    link:"chat",
    icon: "/assets/tabs/chat.png",
    selectedIcon:"/assets/tabs/chat_selected.png"

  },
  {
    title: "Account",
    link:"account",
    icon: "/assets/tabs/my.png",
    selectedIcon:"/assets/tabs/my_selected.png"

  }
]
  constructor() { }

  ngOnInit() {
  }

  handleSelected(index: number){
  // this.selectedItem=index;
   this.selectedFootTab.emit(this.tabItems[index]);
   //console.log(index);
  }

}
