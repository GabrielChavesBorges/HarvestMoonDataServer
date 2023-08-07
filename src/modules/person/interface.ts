import { Season } from 'src/enums/Season.enum';

export interface PersonInterface {
  id: number;
  name: string;
  birthSeason: Season;
  birthDay: number;
  image: string;
}
