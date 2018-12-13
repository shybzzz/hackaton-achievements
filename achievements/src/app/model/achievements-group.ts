export interface AchievementsGroup {
  name: string;
  achievements: {
    name: string;
    steps?: { value: number }[];
  };
}
