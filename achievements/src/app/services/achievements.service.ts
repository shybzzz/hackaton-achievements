import { Injectable } from '@angular/core';
import { AchievementsGroup } from '../model/achievements-group';
import { Http } from '@angular/http';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';
import { MyAchievementGroup } from '../model/my-achievement-group';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  achievements: AchievementsGroup[] = [];
  allMyAchievements: MyAchievementGroup[];

  filteredAchievements: MyAchievementGroup[];

  hiddenButtons = [];

  constructor(private http: Http) {
    this.http.get('assets/data/achievements.json').subscribe(r => {
      const achievements = r.json();
      this.achievements = achievements;
      this.allMyAchievements = achievements.map(group => ({
        group,
        achievements: group.achievements.map(achievement => {
          const steps = achievement.steps;
          let total = 0;
          if (steps) {
            steps.forEach(s => {
              total += s.value;
            });
          }
          return { achievement, total, value: 0 };
        })
      }));
    });
  }

  show(r: 'all' | 'mine' = 'mine') {
    const myAchievements = this.allMyAchievements;
    this.filteredAchievements =
      r === 'mine'
        ? myAchievements.filter(g => g.achievements.some(a => !!a.value))
        : [...myAchievements];
  }
}
