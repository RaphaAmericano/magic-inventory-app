import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection as CollectionInterface } from 'entities';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/entities/user.entity';

@Schema({ versionKey: false })
export class Collection
  extends Document
  implements Omit<CollectionInterface, '_id' | 'owner'>
{

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: User.name })
  owner: User;

  @Prop()
  name: string;

  @Prop()
  cards: { id: string; quantity: number }[];
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
