import {HttpException, HttpService, HttpStatus} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateGitHubAuthInput, GitHubAuthResult } from 'src/graphql.schema';
import { GithubService } from './github.service';
import {ConsoleService} from "../utils/console.service";
import queryString from 'query-string';

//TODO move to env and to docker args
const GITHUB_SECRET = 'db00752183955f7c36b5afae2ee337c2f34359c6';

@Resolver('Github')
export class GithubResolvers {
  constructor(private readonly githubService: GithubService,private httpService:HttpService,private readonly consoleService:ConsoleService) {}

  @Mutation('githubAuth')
  async create(@Args('input') args: CreateGitHubAuthInput) :Promise<GitHubAuthResult>{
    const response = await this.httpService.post('https://github.com/login/oauth/access_token', {
      client_id: args.client_id,
      client_secret: GITHUB_SECRET,
      code: args.code,
      state: args.state
    }).toPromise();

    if (0 == response.data.indexOf('error=')) {
      throw new HttpException('Custom error:' + response.data, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    const query = queryString.parse(response.data);
    if (query.access_token) {
      this.consoleService.log('access_token', query.access_token);
    }
    return {
      access_token: query.access_token as string
    }
  }
}
