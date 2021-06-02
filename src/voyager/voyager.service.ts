import { HttpService, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createSchema, CallBackendArguments } from 'swagger-to-graphql';

const paramsDev = {
	operationName: 'IntrospectionQuery',
	variables: {},
	query:
		'query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n',
};

const paramsLocal = 
{
	operationName: "IntrospectionQuery",
	variables: {},
	query:
		"query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
}

// Define your own http client here
async function callBackend({
}: CallBackendArguments<Request>) {
	return 'Not implemented';
}

@Injectable()
export class VoyagerService {
	constructor(private httpService: HttpService) {}

	public async getDev() {
		try {
			console.log('dev before');
			const result = await this.httpService.post(
				'https://dev-api.dev.allhands.cloud/',
				paramsDev
			);
			const r = await result.toPromise();
			const str = JSON.stringify(r.data);
			console.log('response = ', str);
			return str;
		} catch (ex) {
			console.log(ex);
			return ex;
		}
	}

	public async getDev2() {
		try {
			const result = await this.httpService.post(
				'https://dev-api.dev.allhands.cloud/',
				paramsDev
			);
			const p = await result.toPromise();
			return p.data;
		} catch (ex) {
			console.log(ex);
			return ex;
		}
	}

	public async getLoc() {
		try {
			const result = await this.httpService.post(
				'http://localhost:5003/graphql',
				paramsLocal
			);
			const p = await result.toPromise();
			return p.data;
		} catch (ex) {
			console.log(ex);
			return ex;
		}
	}

	public async getPets() {
		try {
			const result = await this.httpService.post(
				'http://localhost:5003/graphql-pets?',
				paramsLocal
			);
			const p = await result.toPromise();
			return p.data;
		} catch (ex) {
			console.log(ex);
			return ex;
		}
	}
}
