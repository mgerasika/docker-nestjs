
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class CreateGitHubAuthInput {
    client_id?: string;
    code?: string;
    state?: string;
}

export class MathInput {
    x?: number;
    y?: number;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract getCat(id: string): Cat | Promise<Cat>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract createCat2(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract githubAuth(input?: CreateGitHubAuthInput): GitHubAuthResult | Promise<GitHubAuthResult>;

    abstract sum(input?: MathInput): number | Promise<number>;

    abstract diff(input?: MathInput): number | Promise<number>;

    abstract multiply(input?: MathInput): number | Promise<number>;

    abstract div(input?: MathInput): number | Promise<number>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export class GitHubAuthResult {
    access_token?: string;
}
