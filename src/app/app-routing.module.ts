import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
//import { HContainerComponent } from './home';
//import { HomeContainerComponent } from './home/components';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'home', component: HContainerComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, {enableTracing:true})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
