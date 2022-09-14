import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
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

  async findById(_id: string) {
    try {
      const inventory = await this.inventoryModel.findOne({ _id }).exec();
      return inventory;
    } catch (error) {
      throw error;
    }
  }

  async findByUser(id: string) {
    try {
      const inventory = await this.inventoryModel.find({ ownerId: id }).exec();
      return inventory;
    } catch (error) {
      throw error;
    }
  }

  async update(_id: string, updateInventoryDto: UpdateInventoryDto) {
    try {
      const inventory = await this.inventoryModel.findByIdAndUpdate(
        _id,
        updateInventoryDto,
      );
      return inventory;
    } catch (error) {
      throw error;
    }
  }

  async remove(_id: string) {
    try {
      const inventory = await this.inventoryModel.findByIdAndDelete(_id).exec();
      return inventory;
    } catch (error) {
      throw error;
    }
  }
}
