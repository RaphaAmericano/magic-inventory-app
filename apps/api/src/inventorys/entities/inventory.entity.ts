import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Inventory as InventoryInterface } from 'entities';
import { Document } from 'mongoose';

@Schema()
export class Inventory
  extends Document
  implements Omit<InventoryInterface, '_id'>
{
  @Prop()
  name: string;

  @Prop()
  ownerId: string;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
