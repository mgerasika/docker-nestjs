import {Controller, Get, Req, Res, UseInterceptors} from '@nestjs/common';
import {join} from "path";
import {LoggingInterceptor} from "../interceptors/logging.interceptor";

@Controller('api/github')
export class GithubController {
    @Get()
    getSchemaFile(@Req() req, @Res() res) {
        res.sendFile(join(process.cwd(), 'src/shared/schema.graphql'));
    }
}
