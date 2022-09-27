import { PartialType } from '@nestjs/swagger';
import { CreateScrapperDto } from './create-scrapper.dto';

export class UpdateScrapperDto extends PartialType(CreateScrapperDto) {}
