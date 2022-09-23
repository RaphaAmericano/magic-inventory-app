import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [],
  imports: [HttpModule],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {}
