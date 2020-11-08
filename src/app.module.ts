import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { GithubModule } from './github/github.module';
import {UtilsModule} from "./utils/utils.module";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";

@Module({
  imports: [
    UtilsModule,
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
  providers:[
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ]
})
export class AppModule {}
