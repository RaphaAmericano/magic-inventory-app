import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryDto } from './dto/create-inventory.dto';
// import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
@Injectable()
export class InventorysService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto) {
    try {
      const inventory = await new this.inventoryModel(createInventoryDto);
      return inventory.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const inventorys = this.inventoryModel.find().exec();
      return inventorys;
    } catch (error) {
      throw error;
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} inventory`;
  // }

  // update(id: number, updateInventoryDto: UpdateInventoryDto) {
  //   return `This action updates a #${id} inventory`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} inventory`;
  // }
}
