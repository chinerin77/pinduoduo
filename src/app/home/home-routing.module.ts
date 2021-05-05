import { ParseError } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HContainerComponent,
    children:[
      {
        path:'',
        redirectTo: 'hot',
        pathMatch:'full'
      },
      {
        path: ':tabLink',
        component:HomeDetailComponent,
        children:[
          {
            path:'grand',
            component:HomeGrandComponent
          }
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
