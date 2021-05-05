import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponentComponent } from './component';

const routes: Routes = [{
  path:'chat',
  component:ChatComponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatyRoutingModule { }
