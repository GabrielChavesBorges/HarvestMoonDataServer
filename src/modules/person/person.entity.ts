import { Season } from 'src/common/enums/Season.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PersonInterface } from './person.interface';

@Entity('person')
export class PersonEntity implements PersonInterface {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: '20' })
  name: string;

  @Column({ type: 'enum', enum: Season, name: 'birth_season' })
  birthSeason: Season;

  @Column({ type: 'tinyint', name: 'birth_day' })
  birthDay: number;

  @Column({ type: 'varchar', name: 'image', length: '2083' })
  image: string;
}
