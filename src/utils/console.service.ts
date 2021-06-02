import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsoleService {
    log(message?: any, ...optionalParams: any[]): void {
        console.log(`cs:${message} ${optionalParams}`);
    }
}
