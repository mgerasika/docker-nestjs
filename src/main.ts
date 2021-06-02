import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createSchema, CallBackendArguments } from 'swagger-to-graphql';

// Define your own http client here
async function callBackend({
}: CallBackendArguments<Request>) {
	return 'Not implemented';
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());

	console.log('process.env.PORT', process.env.PORT);
	app.use('/voyager-dev', voyagerMiddleware({ endpointUrl: 'api/voyager/dev' }));
	app.use('/voyager-loc', voyagerMiddleware({ endpointUrl: 'api/voyager/loc' }));
	app.use('/voyager-pets', voyagerMiddleware({ endpointUrl: 'api/voyager/pets' }));


	if (true) {
		createSchema({
			swaggerSchema: `./src/pets.yaml`,
			callBackend,
		})
			.then(schema => {
				app.use(
					'/graphql-pets',
					graphqlHTTP(() => {
						return {
							schema,
							graphiql: true,
						};
					}),
				);
			})
			.catch(e => {
				console.log(e);
			});
	}


	await app.listen(process.env.PORT || 5003);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

