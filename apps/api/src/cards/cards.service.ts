import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

const { SCRYFALL_API_URL } = process.env;

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService) {};

  async getCard(id: string) {
    return this.httpService.get(`${SCRYFALL_API_URL}/cards/${id}`);
  }

  async getCardBatch(ids: string[]) {
    return Promise.all(
      ids.map((id) =>
        this.httpService.axiosRef.get(`${SCRYFALL_API_URL}/cards/${id}`),
      ),
    );
  }
}
