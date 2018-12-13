import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss']
})
export class AchievementsPage implements OnInit {
  achievementGroups = [
    {
      name: 'Ecology',
      cssClass: 'ecolog',
      achievements: [{ name: 'Lover', value: 20, total: 100 }]
    }
  ];
  show: 'all' | 'my' = 'my';
  constructor() {}

  ngOnInit() {}

  setAchievents(v) {
    console.log(v);
  }
}
