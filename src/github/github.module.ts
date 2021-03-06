import { HttpModule, Module } from '@nestjs/common';
import { GithubResolvers } from './github.resolvers';
import { GithubService } from './github.service';
import {GithubController} from "./github.controller";

@Module({
  controllers: [GithubController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [GithubService, GithubResolvers],
})
export class GithubModule {}
