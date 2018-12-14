import { Achievement } from './achievement';
export interface AchievementsGroup {
  name: string;
  achievements: Achievement[];
  cssClass: string;
  reward: string;
}
