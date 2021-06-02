import {HttpException, HttpService, HttpStatus} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateGitHubAuthInput, GitHubAuthResult, MathInput } from 'src/graphql.schema';
import { GithubService } from './github.service';
import {ConsoleService} from "../utils/console.service";
const queryString = require('query-string');

//TODO move to env and to docker args
const LOCALHOST_CLIENT_ID = '8f7ad4a059defb21a1b3';
const LOCALHOST_SECRET = 'db00752183955f7c36b5afae2ee337c2f34359c6';
const HEROKU_CLIENT_ID = '1756b603f7ed72b7b6a1';
const HEROKU_SECRET = '8d5822030d04273185ebd771f2b6eb9725d127f8';

const getClientSecret = (clientId:string) => {
  if(clientId === LOCALHOST_CLIENT_ID) {
    return LOCALHOST_SECRET;
  }
  if(clientId === HEROKU_CLIENT_ID) {
    return HEROKU_SECRET;
  }
} 
@Resolver('Github')
export class GithubResolvers {
  constructor(private readonly githubService: GithubService,private httpService:HttpService,private readonly consoleService:ConsoleService) {}

  @Mutation('githubAuth')
  async create(@Args('input') args: CreateGitHubAuthInput) :Promise<GitHubAuthResult>{
    const response = await this.httpService.post('https://github.com/login/oauth/access_token', {
      client_id: args.client_id,
      client_secret: getClientSecret(args.client_id),
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
	
	@Mutation('sum')
	sum(@Args('input') args: MathInput): number {
		debugger;
		return args.x + args.y;
	}

	@Mutation('diff')
	diff(@Args('input') args: MathInput): number {
		return args.x - args.y;
	}

	@Mutation('multiply')
	multiply(@Args('input') args: MathInput): number {
		return args.x * args.y;
	}

	@Mutation('div')
	div(@Args('input') args: MathInput): number {
		return args.x / args.y;
	}
}
