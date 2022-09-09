import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User as UserInterface } from 'entities';
import { Document } from 'mongoose';

@Schema()
export class User extends Document implements Omit<UserInterface, 'id'> {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);