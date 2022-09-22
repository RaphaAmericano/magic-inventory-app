import { CollectionResume, Inventory } from 'entities';
import { IsNotEmpty, IsArray, ArrayMinSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto
  implements Omit<Inventory, '_id' | 'owner' | 'collections'>
{
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  ownerId: string;

  @IsArray()
  @ArrayMinSize(0)
  @ApiProperty()
  collections: CollectionResume[];
}
