import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PersonInterface } from '../person.interface';
import { Season } from 'src/common/enums/Season.enum';

@ArgsType()
export class CreatePersonArgs implements Partial<PersonInterface> {
  @Field(() => String)
  name?: string | undefined;

  @Field(() => Season, { nullable: true })
  birthSeason?: Season | undefined;

  @Field(() => Int, { nullable: true })
  birthDay?: number | undefined;
}
