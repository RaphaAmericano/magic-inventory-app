import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CardResume } from 'entities';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService) {}

  private readonly SCRYFALL_API_URL: string = process.env.SCRYFALL_API_URL;

  async getCard(id: string) {
    return this.httpService.get(`${this.SCRYFALL_API_URL}/cards/${id}`);
  }

  async getCardBatch(cardsResume: CardResume[]) {
    const responses = await Promise.all(
      cardsResume.map(
        async ({ id }) =>
          await lastValueFrom(
            this.httpService.get(`${this.SCRYFALL_API_URL}/cards/${id}`),
          ),
      ),
    );

    return responses.map((response) => response.data);
  }
}
