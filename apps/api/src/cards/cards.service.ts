import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CardResume } from 'entities';

const { SCRYFALL_API_URL } = process.env;

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService) {}

  async getCard(id: string) {
    return this.httpService.get(`${SCRYFALL_API_URL}/cards/${id}`);
  }

  async getCardBatch(cardsResume: CardResume[]) {
    const promise = this.httpService
      .get(
        `${SCRYFALL_API_URL}/cards/${'f295b713-1d6a-43fd-910d-fb35414bf58a'}`,
      )
      .toPromise();
    console.log(promise);
    promise.then(console.log);
    const resolve = await this.httpService.axiosRef.get(
      `${SCRYFALL_API_URL}/cards/${'f295b713-1d6a-43fd-910d-fb35414bf58a'}`,
    );
    console.log(resolve);

    return;
    // return await Promise.all(
    //   cardsResume.map(({ id }) =>
    //     this.httpService.axiosRef.get(`${SCRYFALL_API_URL}/cards/${id}`),
    //   ),
    // );
  }
}
