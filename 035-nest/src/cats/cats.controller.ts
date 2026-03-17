import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Req() request: Request): string {
    return 'this action returns all cats';
  }
}
