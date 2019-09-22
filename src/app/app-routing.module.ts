import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {MyBarChartComponent} from './my-bar-chart/my-bar-chart.component';
import {FormComponent} from './form/form.component';


const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'chart',component:MyBarChartComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
