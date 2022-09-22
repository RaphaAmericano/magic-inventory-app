import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from '../collections/entities/collection.entity';
import { User } from '../users/entities/user.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
@Injectable()
export class InventorysService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,
    @InjectModel(User.name) private userModel: Model<Inventory>,
    @InjectModel(Collection.name) private collectionModel: Model<Collection>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const { ownerId, name, collections: collectionsIds } = createInventoryDto;

    try {
      const owner = await this.userModel.findById(ownerId);
      const collections = await this.collectionModel
        .find()
        .where('_id')
        .in(collectionsIds)
        .exec();

      const inventory = await new this.inventoryModel({
        name,
        owner,
        collections,
      });
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
      const owner = await this.userModel.findById(id);
      const inventory = await this.inventoryModel
        .find({ owner })
        .populate('collections')
        .exec();
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
