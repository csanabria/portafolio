import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'portafolio', component: PortafolioComponent }
  { path: 'about', component: AboutComponent }
];

@NgModule({

})
export class AppRoutingModule {

}
