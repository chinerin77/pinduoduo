import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share';
import { HContainerComponent, HomeDetailComponent, HomeGrandComponent} from './components';
import { FormsModule } from '@angular/forms';
//import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from '../share';




@NgModule({
  declarations: [
    HContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  
  ],
  imports: [
    ShareModule,
    HomeRoutingModule,
    FormsModule
  ]

})
export class HomeModule { }
