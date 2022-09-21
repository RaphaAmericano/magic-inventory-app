import { Inventory } from 'entities';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto implements Omit<Inventory, '_id' | 'owner'> {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  ownerId: string;
}
