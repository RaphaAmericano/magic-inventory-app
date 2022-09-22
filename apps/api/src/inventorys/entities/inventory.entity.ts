import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Inventory as InventoryInterface,
  User as UserInterface,
  Collection as CollectionInterface,
} from 'entities';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  Collection,
  CollectionSchema,
} from '../../collections/entities/collection.entity';
import { User, UserSchema } from '../../users/entities/user.entity';

@Schema()
export class Inventory
  extends Document
  implements Omit<InventoryInterface, '_id' | 'owner'>
{
  @Prop()
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  owner: UserInterface;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: Collection.name }],
  })
  collections: CollectionInterface[];
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
