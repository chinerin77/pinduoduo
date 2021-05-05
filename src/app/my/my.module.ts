import { NgModule } from '@angular/core';
import { MyRoutingModule } from './my-routing.module';
import { ShareModule } from '../share/share.module';
import { MyComponentComponent } from '../home/components/my-component/my-component.component';


@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
