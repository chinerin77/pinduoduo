import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyContainerComponent } from './component';

const routes: Routes = [
  {path:'account',
 component:MyContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
