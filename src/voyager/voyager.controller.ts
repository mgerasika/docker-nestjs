import {Controller, Post,Get, Req, Res, UseInterceptors} from '@nestjs/common';
import {VoyagerService} from "./voyager.service";

@Controller('api/voyager')
export class VoyagerController {
    public constructor(private voyagerService:VoyagerService) {
    }

    @Post("ah")
    async getAH() {
        return await this.voyagerService.getAH();
    }

		@Post("sr")
    async getSR() {
        return await this.voyagerService.getSR();
    }

    @Post("ah-stage")
    getAHStage(@Req() req, @Res() res) {
        res.send(this.voyagerService.getAHStage());
		}
	
		@Post("candide")
    getCandide(@Req() req, @Res() res) {
        res.send(this.voyagerService.getCandide());
    }
}
