import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection as CollectionInterface } from 'entities';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Collection
  extends Document
  implements Omit<CollectionInterface, '_id'>
{
  @Prop()
  ownerId: string;

  @Prop()
  name: string;

  @Prop()
  cards: { id: string; quantity: number }[];
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
