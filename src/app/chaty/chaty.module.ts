import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatyRoutingModule } from './chaty-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ChatyRoutingModule
  ]
})
export class ChatyModule { }
