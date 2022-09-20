import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Inventory as InventoryInterface, User } from 'entities';
import { Document } from 'mongoose';
import { UserSchema } from 'src/users/entities/user.entity';

@Schema()
export class Inventory
  extends Document
  implements Omit<InventoryInterface, '_id' | 'owner'>
{
  @Prop()
  name: string;

  @Prop({ type: UserSchema })
  owner: User;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
