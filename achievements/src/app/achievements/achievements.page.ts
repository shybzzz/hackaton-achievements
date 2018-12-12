import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss']
})
export class AchievementsPage implements OnInit {
  r;
  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('assets/data/achievements.json').subscribe(r => {
      this.r = r.json();
    });
  }
}
