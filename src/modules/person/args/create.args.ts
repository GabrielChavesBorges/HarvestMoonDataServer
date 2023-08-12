import { ArgsType, Field } from '@nestjs/graphql';
import { PersonInterface } from '../person.interface';
import { Season } from 'src/common/enums/Season.enum';

@ArgsType()
export class CreatePersonArgs implements Partial<PersonInterface> {
  @Field()
  name?: string | undefined;

  @Field({ nullable: true })
  birthSeason?: Season | undefined;

  @Field({ nullable: true })
  birthDay?: number | undefined;
}
