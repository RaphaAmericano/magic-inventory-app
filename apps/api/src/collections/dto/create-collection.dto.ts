import { Collection, CardResume, User } from 'entities';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCollectionDto
  implements Omit<Collection, '_id' | 'owner' | 'cards'>
{
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  ownerId: string;

  @ApiProperty()
  cards: CardResume[];
}
