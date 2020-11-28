import { HttpModule, Module } from '@nestjs/common';
import {VoyagerController} from "./voyager.controller";
import {VoyagerService} from "./voyager.service";

@Module({
  controllers: [VoyagerController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [VoyagerService],
})
export class VoyagerModule {}
