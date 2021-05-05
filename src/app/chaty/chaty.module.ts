import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatyRoutingModule } from './chaty-routing.module';
import { ShareModule } from '../share/share.module';
import { ChatComponentComponent } from './component';


@NgModule({
  declarations: [ChatComponentComponent],
  imports: [
    ShareModule,
    ChatyRoutingModule
  ]
})
export class ChatyModule { }
