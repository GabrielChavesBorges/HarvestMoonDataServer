import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetOneByIdArgs {
  @Field(() => Int)
  id: number;
}
