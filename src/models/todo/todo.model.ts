import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoModel {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    description?: string;
}
