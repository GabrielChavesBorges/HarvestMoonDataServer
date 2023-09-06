import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { personProviders } from './person.provider';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [ ...personProviders, PersonResolver, PersonService],
})
export class PersonModule {}
