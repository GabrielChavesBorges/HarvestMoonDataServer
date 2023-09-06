import { Inject, Injectable } from '@nestjs/common';
import { Person } from './person.model';
import { GetOneByIdArgs } from '../../common/args/get-one-by-id.args';
import { Repository } from 'typeorm';
import { CreatePersonArgs } from './args/create.args';
import { PersonEntity } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private repository: Repository<PersonEntity>,
  ) {}

  async getOnePersonById(args: GetOneByIdArgs): Promise<Person | null> {
    const { id } = args;
    return await this.repository.findOneBy({ id });
  }

  async createPerson(args: CreatePersonArgs): Promise<boolean> {
    const newPerson = this.repository.create({ ...args });
    try {
      await this.repository.insert(newPerson);
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
