import {UtilsService} from "./utils.service";
import {ConsoleService} from "./console.service";
import {Global, Module} from "@nestjs/common";

@Global()
@Module({
  providers: [UtilsService, ConsoleService],
  exports: [UtilsService, ConsoleService],
})
export class UtilsModule {}
