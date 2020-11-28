import {HttpException, HttpService, HttpStatus} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateGitHubAuthInput, GitHubAuthResult } from 'src/graphql.schema';
import { TodoService } from './todo.service';
import {ConsoleService} from "../utils/console.service";
import {TodoModel} from "../models/todo/todo.model";

@Resolver(of => TodoModel)
export class TodoResolvers {
  constructor(private readonly todoService: TodoService, private readonly consoleService:ConsoleService) {}

  // @Query(returns => TodoModel)
  // getTodos() {
  //   return [{id:1,description:'hi1'}][0]
  // }

  // @Query('todo')
  // getTodo(@Args('id') id: number) :TodoModel{
  //   return {id:1,description:'hi1'}
  // }
  //
  // @Mutation('createTodo')
  // create(@Args('input') args: TodoModel) :TodoModel{
  //   return {
  //     description:'demo',
  //     id: 2
  //   }
  // }
}
