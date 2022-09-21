import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserSchema } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await new this.userModel(createUserDto);
      return user.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const users = this.userModel.find().exec();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string) {
    try {
      const user = await this.userModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // async findUnique(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   select?: Prisma.UserSelect;
  // }): Promise<User> {
  //   const { where, select } = params;
  //   const user = await this.prisma.user.findUnique({ where, select });
  //   return user;
  // }

  async update(id: string, user: User) {
    // try {
    //   const updatedUser = await this.userModel.findByIdAndUpdate(id, user).exec();
    //   return updatedUser;
    // } catch (error) {
    //   throw error;
    // }
  }

  async remove(id: string) {
    try {
      const user = await this.userModel.findOneAndDelete({ _id: id }).exec();
      return user.remove();
    } catch (error) {
      throw error;
    }
  }
}
