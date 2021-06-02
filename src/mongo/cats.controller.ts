import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('mongo-cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) { }

	@Post()
	async create(@Body() createCatDto: CreateCatDto) {
		await this.catsService.create(createCatDto);
	}

	@Get()
	async findAll(): Promise<Cat[]> {
		return this.catsService.findAll();
	}

	// just for test add one item
	@Get('create')
	async demo() {
		await this.catsService.create({ age: 12, breed: '11', name: 'Hello' });
	}
}
