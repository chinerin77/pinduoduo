import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share';
import { HContainerComponent, HomeContainerComponent } from './components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HContainerComponent
  
  ],
  imports: [
    ShareModule,
    HomeRoutingModule,
    FormsModule

  ]
})
export class HomeModule { }
