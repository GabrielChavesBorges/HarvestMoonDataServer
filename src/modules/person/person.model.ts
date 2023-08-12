import { Field, ObjectType } from '@nestjs/graphql';
import { Season } from 'src/common/enums/Season.enum';
import { PersonInterface } from './person.interface';

@ObjectType()
export class Person implements PersonInterface {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  birthSeason: Season;

  @Field()
  birthDay: number;

  @Field()
  image: string;
}
