import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
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
