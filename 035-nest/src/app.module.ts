import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
