import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { ServicesW1Component } from './services-w1/services-w1.component';

const routes: Routes = [
  { path: 'services-component', component: ServicesComponent },
  { path: 'services-w1-component', component: ServicesW1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
