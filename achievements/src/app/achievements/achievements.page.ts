import { AchievementsService } from './../services/achievements.service';
import { MyAchievementGroup } from './../model/my-achievement-group';
import { Component, OnInit } from '@angular/core';
import { MyAchievement } from '../model/my-achievement';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss']
})
export class AchievementsPage implements OnInit {
  show: 'all' | 'mine' = 'mine';
  constructor(public achievementService: AchievementsService) {}

  ngOnInit() {}

  setAchievents() {
    this.achievementService.show(this.show);
  }

  getValue(achievement: MyAchievement) {
    return `${Math.round((achievement.value * 100) / achievement.total)}%`;
  }
}
