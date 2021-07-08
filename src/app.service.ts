import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new ForbiddenException('Forbidden!!');
    return 'Hello World!';
  }
}
