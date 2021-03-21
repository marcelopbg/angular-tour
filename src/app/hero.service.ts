import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
