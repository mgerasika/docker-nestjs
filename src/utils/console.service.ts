import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsoleService {
    log(message?: any, ...optionalParams: any[]) {
        console.log(`cs:${message} ${optionalParams}`);
    }
}
