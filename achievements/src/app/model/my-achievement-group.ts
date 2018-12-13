import { MyAchievement } from './my-achievement';
import { AchievementsGroup } from './achievements-group';
export interface MyAchievementGroup {
  group: AchievementsGroup;
  achievements: MyAchievement[];
}
