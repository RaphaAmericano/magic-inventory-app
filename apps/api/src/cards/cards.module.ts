import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {}
