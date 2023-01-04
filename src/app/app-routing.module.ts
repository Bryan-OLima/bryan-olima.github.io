import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const pageName: string = 'Bryan Lima |'

const routes: Routes = [
  {
    path: '', 
    component: LandingPageComponent, 
    title: `${pageName} Home`
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: `${pageName} Portfolio`
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
    title: `${pageName} About Me` 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
