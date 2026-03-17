import { Controller, Get, Query } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: Request['query']): string {
    return JSON.stringify(query) + '\n' + 'this action returns all cats';
  }
}
