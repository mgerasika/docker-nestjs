
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

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract getCat(id: string): Cat | Promise<Cat>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract githubAuth(input?: CreateGitHubAuthInput): GitHubAuthResult | Promise<GitHubAuthResult>;
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
