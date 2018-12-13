import { Injectable, OnInit } from '@angular/core';
import { AchievementsGroup } from '../model/achievements-group';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService implements OnInit {
  allAchievements$ = new Subject<AchievementsGroup[]>();

  constructor(private http: Http) {}
  ngOnInit() {
    this.http.get('assets/data/achievements.json').subscribe(r => {
      this.allAchievements$.next(r.json());
    });
  }
}
