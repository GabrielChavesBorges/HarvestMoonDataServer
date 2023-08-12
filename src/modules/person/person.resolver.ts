import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetOneByIdArgs } from '../../common/args/get-one-by-id.args';
import { Person } from './person.model';
import { PersonService } from './person.service';
import { CreatePersonArgs } from './args/create.args';

@Resolver(() => Person)
export class PersonResolver {
  constructor(@Inject(PersonService) private service: PersonService) {}

  @Query(() => Person)
  async person(@Args() args: GetOneByIdArgs): Promise<Person | null> {
    return await this.service.getOnePersonById(args);
  }

  @Mutation(() => Boolean)
  async createPerson(@Args() args: CreatePersonArgs): Promise<boolean> {
    return await this.service.createPerson(args);
  }
}
