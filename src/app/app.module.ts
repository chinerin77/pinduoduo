import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from './home';
import { Notificationrceptor } from './home/interceptor/notification.interceptor';
import { MyModule } from './my/my.module';
import { ChatyModule } from './chaty/chaty.module';
import { CategoryModule } from './category/category.module';
import { RecommendModule } from './recommend/recommend.module';
import { ProductModule } from './product';


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
    HomeModule,
    HttpClientModule,
    MyModule,
    ChatyModule,
    CategoryModule,
    RecommendModule,
    ProductModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Notificationrceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
