import { Collection, CardResume, User } from 'entities';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCollectionDto implements Omit<Collection, '_id'> {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  owner: User;

  @ApiProperty()
  cards: CardResume[];
}
