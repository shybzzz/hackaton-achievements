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

  inrease(n0: number, n1: number, button: number) {
    const service = this.achievementService;
    const groups = service.allMyAchievements;
    const a0 = groups[0].achievements[0];
    a0.value += n1;
    const a1 = groups[0].achievements[1];
    a0.value += n0;
    a1.value += n1;
    service.allMyAchievements = [...groups];
    service.show();
    service.hiddenButtons.push(button);

    this.showAchievementButton = true;
  }

  showButton(button: number) {
    return this.achievementService.hiddenButtons.indexOf(button) === -1;
  }
}
