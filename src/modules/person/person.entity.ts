import { Season } from 'src/common/enums/Season.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PersonInterface } from './person.interface';

@Entity('person')
export class PersonEntity implements PersonInterface {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column({ type: 'character varying', name: 'name', length: '20' })
  name: string;

  @Column({ type: 'enum', enum: Season, name: 'birth_season', nullable: true })
  birthSeason: Season;

  @Column({ type: 'smallint', name: 'birth_day', nullable: true })
  birthDay: number;

  @Column({ type: 'character varying', name: 'image', length: '2083', nullable: true })
  image: string;
}
