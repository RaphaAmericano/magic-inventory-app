import { Connection } from 'mongoose';
import { UserSchema } from './dto/user.schema';
import { MODEL, DATABASE } from '../database/database.constants';

export const UsersProviders = [
  {
    provide: MODEL.USER,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATABASE.CONNECTION],
  },
];
