import { Injectable } from '@nestjs/common';
import { CreateScrapperDto } from './dto/create-scrapper.dto';
import { UpdateScrapperDto } from './dto/update-scrapper.dto';

import * as cheerio from 'cheerio';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ScrapperService {
  constructor(private readonly httpService: HttpService) {}

  async getCardLMPrice(card: string) {
    const site = await this.httpService.get(
      `https://www.ligamagic.com.br/?view=cards/card&card=${card.replace(
        ' ',
        '+',
      )}`,
    );
    const { data } = await lastValueFrom(site);

    const html = cheerio.load(data, null);
    const prices = html('.col-prc-menor')
      .text()
      .split('R$')
      .map((v) => v.trim().replace(',', '.'))
      .filter((v) => v !== '')
      .map((v) => parseFloat(v));

    return prices[0];
  }
}
