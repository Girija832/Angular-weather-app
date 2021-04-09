import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  { path: 'weather-details', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
