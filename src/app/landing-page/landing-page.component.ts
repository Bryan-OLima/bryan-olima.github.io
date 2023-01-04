import { Component } from '@angular/core';
import { faSquare, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faB } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  faCoffee = faB
}
