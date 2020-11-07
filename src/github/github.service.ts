import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';

@Injectable()
export class GithubService {
  private readonly cats: Cat[] = [{ id: 1, name: 'Cat 1', age: 5 },{ id: 2, name: 'Cat 2', age: 51 },{ id: 3, name: 'Cat 3', age: 4 }];

  create(cat: Cat): Cat {
    cat.id = this.cats.length + 1;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOneById(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
