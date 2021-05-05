import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent, CountDownComponent, FooterComponent, HorizontalGridComponent, ImageSliderComponent, ProductCardComponent, ScrollableTabComponent, VerticalGridComponent } from './component';
import {GridItemDirective, GridItemImageDirective, GridItemTitleDirective} from './directives'
import { TagDirective } from './directives/tag.directive';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    BackButtonComponent,
    TagDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    BackButtonComponent,
    TagDirective

  ]
})
export class ShareModule { }
