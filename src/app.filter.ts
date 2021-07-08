import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class AppFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log('In the filter');
    host.switchToHttp().getResponse().send({
      message: exception.getResponse(),
    });
  }
}
