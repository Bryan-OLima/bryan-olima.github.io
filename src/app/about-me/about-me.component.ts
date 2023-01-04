import { Component } from '@angular/core';
import { Skills } from '../shared/DTOs/skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  birthYear: number = 1995;

  hardSkills: Skills[] = [
    {
      name: "Made some Angular 13+/Angular Material projects."
    },
    {
      name: "Consuming internals and externals API's."
    },
    {
      name: "Unity tests with Jasmine/Karma."
    },
    {
      name: "English."
    },
    {
      name: "Git."
    },
    {
      name: "Agile/Scrum."
    },
    {
      name: "DDD."
    },
    {
      name: "OOP."
    },
    {
      name: "Planning page design based on customer proposals."
    },
    {
      name: "A lit bit about C#/.net."
    },
    {
      name: "Sometimes, doing users stories and tasks."
    }
  ];
  
  softSkills: Skills[] = [
    {
      name: "Colaboration"
    },
    {
      name: "Comunication."
    },
    {
      name: "Public Speaking."
    },
    {
      name: "Flexibility."
    },
    {
      name: "Team work."
    },
    {
      name: "Empathy."   
    },
    {
      name: "Ethic."
    }
  ];
}
