import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';
import { User } from '../users/entities/user.entity';
import { CardsService } from '../cards/cards.service';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection.name) private collectionModel: Model<Collection>,
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly cardsService: CardsService,
  ) {}

  async create(createCollectionDto: CreateCollectionDto) {
    const { cards, name, ownerId } = createCollectionDto;
    try {
      const owner = await this.userModel.findById(ownerId);
      const collection = await new this.collectionModel({ name, cards, owner });
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

      // const cards = this.cardsService.getCardBatch(collection.cards);
      // console.log(cards);
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
