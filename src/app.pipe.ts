import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AppPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('In pipe');
    return value;
  }
}
