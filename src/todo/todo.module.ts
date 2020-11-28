import { Module } from '@nestjs/common';
import { TodoResolvers } from './todo.resolvers';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoService, TodoResolvers],
})
export class TodoModule {}
