import { Component } from '@angular/core';
import { Card } from '../shared/DTOs/cards';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  cards: Card[] = [
    {
      title: 'Lord Of The Rings',
      subtitle: 'Angular',
      content: "It's a Lord Of The Ring Web app based on his wiki. It's consuming external API",
      gitHub: 'https://github.com/Bryan-OLima/LordOfTheRings',
      imgSrc: '../../assets/images/lotrprnt.jpg',
      tryItOut: 'https://bryan-olima.github.io/LordOfTheRings/'
    },
    {
      title: 'Currency Quotation',
      subtitle: 'Angular',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam tenetur',
      gitHub: 'https://github.com/bryan-olima/currencyQuotation/',
      imgSrc: '../../assets/images/profile.jpg',
      tryItOut: 'https://bryan-olima.github.io/currencyQuotation/'
    },
    {
      title: 'First Angular Tutorial',
      subtitle: 'Angular',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam tenetur',
      gitHub: 'https://github.com/bryan-olima/firstAngularDocTutorial/',
      imgSrc: '../../assets/images/profile.jpg',
      tryItOut: 'https://bryan-olima.github.io/firstAngularDocTutorial/'
    },
    {
      title: 'Number Guesser',
      subtitle: 'Angular',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam tenetur',
      gitHub: 'https://github.com/bryan-olima/NumberGuesser/',
      imgSrc: '../../assets/images/profile.jpg',
      tryItOut: 'https://bryan-olima.github.io/NumberGuesser/'
    }
  ]
}
