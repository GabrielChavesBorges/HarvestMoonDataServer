import { ApolloDriverConfig, ApolloDriverConfigFactory } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Injectable()
export class GqlConfigService implements ApolloDriverConfigFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: '~/schema.gql',
      sortSchema: true,
      playground: true,
      csrfPrevention: false,
      introspection: true,
      formatError: (error: GraphQLError) => {
        const logMessage = `----------- GraphQL Error ----------
PATH - ${error.path}
MESSAGE - ${error.message}
CODE - ${error.extensions.code}

ORIGINAL ERROR --------------------
    ${error.originalError?.stack}`;
        // Unauthorized exceptions are treated in auth-exception.filter.ts
        if (error.message !== 'Unauthorized') {
          console.log(logMessage);
        }
        const graphQLFormattedError: GraphQLFormattedError = {
          path: error.path,
          message: error.message,
          extensions: error.extensions,
        };
        return graphQLFormattedError;
      },
    };
  }
}
