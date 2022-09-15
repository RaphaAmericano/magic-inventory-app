import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection as CollectionInterface } from 'entities';
import { Document } from 'mongoose';

@Schema()
export class Collection
  extends Document
  implements Omit<CollectionInterface, '_id'>
{
  @Prop()
  name: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);