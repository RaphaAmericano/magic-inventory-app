import { Module } from '@nestjs/common';
import { InventorysService } from './inventorys.service';
import { InventorysController } from './inventorys.controller';
import { Inventory, InventorySchema } from './entities/inventory.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
    ]),
  ],
  controllers: [InventorysController],
  providers: [InventorysService],
})
export class InventorysModule {}
