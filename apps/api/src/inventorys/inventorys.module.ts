import { Module } from '@nestjs/common';
import { InventorysService } from './inventorys.service';
import { InventorysController } from './inventorys.controller';
import { Inventory, InventorySchema } from './entities/inventory.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
    ]),
    UsersModule,
  ],
  controllers: [InventorysController],
  providers: [InventorysService],
})
export class InventorysModule {}
