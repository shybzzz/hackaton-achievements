import { MyAchievementGroup } from './../model/my-achievement-group';
import { AchievementsService } from './../services/achievements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  showAchievementButton = false;
  constructor(private achievementService: AchievementsService) {}

  inrease(n: number, button: number) {
    const service = this.achievementService;
    const groups = service.allMyAchievements;
    const a = groups[0].achievements[0];
    a.value += n;
    service.allMyAchievements = [...groups];
    service.show();
    service.hiddenButtons.push(button);

    this.showAchievementButton = a.total === a.value;
  }

  showButton(button: number) {
    return this.achievementService.hiddenButtons.indexOf(button) === -1;
  }
}
