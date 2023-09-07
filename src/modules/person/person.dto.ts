import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Season } from 'src/common/enums/Season.enum';
import { PersonInterface } from './person.interface';

@ObjectType()
export class PersonDTO implements PersonInterface {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => Season, { nullable: true })
  birthSeason: Season;

  @Field(() => Int, { nullable: true })
  birthDay: number;

  @Field({ nullable: true })
  image: string;
}
