import { Connection } from 'mongoose';
// import { UserSchema } from './dto/user.schema';
import { UserSchema } from './entities/user.entity';
import { MODEL, DATABASE } from '../database/database.constants';

export const usersProviders = [
  {
    provide: MODEL.USER,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATABASE.CONNECTION],
  },
];
