import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { HomepageComponent } from './main/homepage/homepage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent, children:[
  {path:'',component: HomepageComponent}
  ]},
  {path:"dashboard", component:DashboardComponent, children:[
  {path:'login',component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
