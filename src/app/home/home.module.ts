import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share';
import { ChildComponent, HContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent} from './components';
import { FormsModule } from '@angular/forms';
import { HomeService, token } from './components/services';
//import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from '../share';




@NgModule({
  declarations: [
    HContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ParentComponent,
    ChildComponent
  
  ],
  imports: [
    ShareModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers:[
    {provide: token,useValue:'http://local.dev'}
  ]

})
export class HomeModule { }
