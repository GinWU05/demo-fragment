import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return (
      JSON.stringify(request.query) + '\n' + 'this action returns all cats'
    );
  }
}
