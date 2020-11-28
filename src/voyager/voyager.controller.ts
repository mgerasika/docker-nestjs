import {Controller, Post,Get, Req, Res, UseInterceptors} from '@nestjs/common';
import {join} from "path";
import {LoggingInterceptor} from "../interceptors/logging.interceptor";
import {VoyagerService} from "./voyager.service";

@Controller('api/voyager')
export class VoyagerController {
    public constructor(private voyagerService:VoyagerService) {
    }

    @Post("dev2")
    async getDev2() {
        return await this.voyagerService.getDev2();
    }

    @Post("dev")
    async getDev(@Req() req, @Res() res) {
        const json = await this.voyagerService.getDev();
        res.send(json);
    }

    @Post("stage")
    getStage(@Req() req, @Res() res) {
        res.send(this.voyagerService.getStage());
    }
}
