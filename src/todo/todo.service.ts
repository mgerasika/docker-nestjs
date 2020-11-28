import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';
import {TodoModel} from "../models/todo/todo.model";

@Injectable()
export class TodoService {
  private readonly todos: TodoModel[] = [{ id: 1, description: 'Cat 1' },{ id: 2, description: 'Cat 2' },{ id: 3, description: 'Cat 3'}];

  create(todo: TodoModel): TodoModel {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    return todo;
  }

  findAll(): TodoModel[] {
    return this.todos;
  }

  findOneById(id: number): TodoModel {
    return this.todos.find(cat => cat.id === id);
  }
}
