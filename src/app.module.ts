import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [
    CatsModule,
    GithubModule,
    GraphQLModule.forRoot({
      playground:true,
      typePaths: ['./**/*.graphql'],
      introspection:true,
      installSubscriptionHandlers: true,
      cors:true
    }),
  ],
})
export class AppModule {}
