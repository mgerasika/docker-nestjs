import { HttpService } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateGitHubAuthInput, GitHubAuthResult } from 'src/graphql.schema';
import { GithubService } from './github.service';

const GITHUB_SECRET = 'db00752183955f7c36b5afae2ee337c2f34359c6';
@Resolver('Github')
export class GithubResolvers {
  constructor(private readonly githubService: GithubService,private httpService:HttpService) {}

  @Mutation('githubAuth')
  async create(@Args('input') args: CreateGitHubAuthInput): Promise<GitHubAuthResult> {
    const res = await this.httpService.post('https://github.com/login/oauth/access_token',{
      client_id: args.client_id,
      client_secret: GITHUB_SECRET,
      code: args.code,
      state: args.state
    }).toPromise();
    
    return {
      access_token: res.data
    }
  }
}
