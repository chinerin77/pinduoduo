import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryContainerComponent } from './component';

const routes: Routes = [
  {path:'category',
component:CategoryContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
