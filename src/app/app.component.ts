import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Skills';
  skills : Array<string> = ['HTML', 'CSS', 'JS', 'TS', 'ANGULAR'] 
  title2 : string= 'Countries To Visit'
  CountriesToVisit : string[] = ['French Polynesia', 'khazakstan', 'indonesia', 'Saudi Arabia', 'Vietnam']
  title3 : string= 'ThingsToDo'
  ThingsToDo : string[] = ['Sky Diving', 'Hike to the edge of an active volcano in Indonesia', 'Travel to Antarctica', 'Be a content Creator']
  title4 : string='Futuristic Technologies'
  FuturisticTechnologies: string[] = ['Quantum Computing','AI-Powered Robots','Hyperloop Transportation','Augmented Reality Glasses','Brain-Computer Interfaces'
  ];
title5 : string='JunglesToVisit'
  JunglesToVisit: string[] = ['Amazon Rainforest – Brazil','Congo Rainforest – Central Africa','Daintree Rainforest – Australia','Borneo Rainforest – Malaysia & Indonesia','Sinharaja Forest Reserve – Sri Lanka'
  ];

  LegendaryFootballPlayers = [
    { name: 'Pelé', country: 'Brazil', position: 'Forward', activeYears: '1956 – 1977' },
    { name: 'Diego Maradona', country: 'Argentina', position: 'Attacking Mid', activeYears: '1976 – 1997' },
    { name: 'Zinedine Zidane', country: 'France', position: 'Midfielder', activeYears: '1989 – 2006' },
    { name: 'Cristiano Ronaldo', country: 'Portugal', position: 'Forward', activeYears: '2002 – Present' }
  ];

}
