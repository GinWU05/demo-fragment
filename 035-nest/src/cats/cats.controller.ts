import { Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action returns a new cat';
  }

  @Get()
  findAll(@Query() query: Request['query']): string {
    return JSON.stringify(query) + '\n' + 'this action returns all cats';
  }
}
