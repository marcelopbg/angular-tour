import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
