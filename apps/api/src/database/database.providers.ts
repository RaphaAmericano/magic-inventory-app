import * as mongoose from 'mongoose';
import { DATABASE } from './database.constants';
export const databaseProviders = [
  {
    provide: DATABASE.CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE_URL),
  },
];
