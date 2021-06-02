import {HttpService, Injectable} from '@nestjs/common';

const params = {"operationName":"IntrospectionQuery","variables":{},"query":"query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"};
@Injectable()
export class VoyagerService {
  constructor(private httpService:HttpService) {}


  public async getAH() {
    try {
      const result = await this.httpService.post("https://dev-api.dev.allhands.cloud/", params);
      const p = await result.toPromise();
      return p.data;
    }
    catch (ex) {
      console.log(ex)
      return ex;
    }
	}
	
	public async getSR() {
    try {
      const result = await this.httpService.post("https://gateway.ahs.allhands.cloud/", params);
      const p = await result.toPromise();
      return p.data;
    }
    catch (ex) {
      console.log(ex)
      return ex;
    }
  }

  public getAHStage() {
    return this.httpService.get("https://stage-api.stage.allhands.cloud/");
  }
}
