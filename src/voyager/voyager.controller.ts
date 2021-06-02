import {
	Controller,
	Post,
	Get,
	Req,
	Res,
	UseInterceptors,
} from '@nestjs/common';
import { join } from 'path';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { VoyagerService } from './voyager.service';

@Controller('api/voyager')
export class VoyagerController {
	public constructor(private voyagerService: VoyagerService) { }

	@Post('dev')
	async postDev() {
		return await this.voyagerService.getDev();
	}

	@Get('dev')
	async getDev() {
		return await this.voyagerService.getDev();
	}

	@Post('dev2')
	async postDev2() {
		return await this.voyagerService.getDev2();
	}

	@Get('dev2')
	async getDev2() {
		return await this.voyagerService.getDev2();
	}

	@Post('loc')
	async postLoc() {
		return await this.voyagerService.getLoc();
	}

	@Get('loc')
	async getLoc() {
		return await this.voyagerService.getLoc();
	}

	@Post('pets')
	async postPets() {
		return await this.voyagerService.getPets();
	}

	@Get('pets')
	async getPets() {
		return await this.voyagerService.getPets();
	}
}
