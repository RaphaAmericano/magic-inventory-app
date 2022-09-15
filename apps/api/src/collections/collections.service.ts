import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection.name) private collectionModel: Model<Collection>,
  ) {}

  async create(createCollectionDto: CreateCollectionDto) {
    try {
      const collection = await new this.collectionModel(createCollectionDto);
      return collection.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const collections = this.collectionModel.find().exec();
      return collections;
    } catch (error) {
      throw error;
    }
  }

  async findById(_id: string) {
    try {
      const collection = await this.collectionModel.findOne({ _id }).exec();
      return collection;
    } catch (error) {
      throw error;
    }
  }

  async findByUser(id: string) {
    try {
      const collection = await this.collectionModel
        .find({ ownerId: id })
        .exec();
      return collection;
    } catch (error) {
      throw error;
    }
  }

  async update(_id: string, updateCollectionDto: UpdateCollectionDto) {
    try {
      const collection = await this.collectionModel.findByIdAndUpdate(
        _id,
        updateCollectionDto,
      );
      return collection;
    } catch (error) {
      throw error;
    }
  }

  async remove(_id: string) {
    try {
      const collection = await this.collectionModel
        .findByIdAndDelete(_id)
        .exec();
      return collection;
    } catch (error) {
      throw error;
    }
  }
}
