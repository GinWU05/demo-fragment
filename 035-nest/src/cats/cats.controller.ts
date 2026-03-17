import { Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import type { Request } from 'express';

interface CarParam {
  id: string;
}

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

  @Get(':id')
  findOne(@Param() params: CarParam): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
