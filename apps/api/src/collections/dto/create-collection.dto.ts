import { Collection, CardResume } from 'entities';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCollectionDto implements Omit<Collection, '_id'> {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  ownerId: string;

  @ApiProperty()
  cards: CardResume[];
}
