import { Season } from 'src/common/enums/Season.enum';

export interface PersonInterface {
  id: number;
  name: string;
  birthSeason: Season;
  birthDay: number;
  image: string;
}
