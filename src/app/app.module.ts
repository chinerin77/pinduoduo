import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from './share/share.module';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './share';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

//import {GridItemDirective, GridItemImageDirective, GridItemTitleDirective} from './share';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShareModule,
    AppRoutingModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
