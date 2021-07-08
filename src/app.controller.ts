import {
  Controller,
  Get,
  UsePipes,
  UseGuards,
  UseFilters,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { AppFilter } from './app.filter';
import { AppGuard } from './app.guard';
import { AppInterceptor } from './app.interceptor';
import { AppPipe } from './app.pipe';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(AppInterceptor)
  @UseFilters(AppFilter)
  @UsePipes(AppPipe)
  @UseGuards(AppGuard)
  @Get()
  getHello(@Query() query: Record<string, string>): string {
    return this.appService.getHello();
  }
}
