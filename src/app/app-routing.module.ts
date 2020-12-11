import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent, children:[
  {path:'',component: HomepageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
