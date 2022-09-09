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

  async findByEmail(email: string){
    try {
      const user = await this.userModel.findOne({ email }).exec();
      return user;
    } catch (error) {
      throw error;
    }
  }

  // async findOne(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<User[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   try {
  //     const user = await this.prisma.user.findMany({
  //       skip,
  //       take,
  //       cursor,
  //       where,
  //       orderBy,
  //     });
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async findUnique(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   select?: Prisma.UserSelect;
  // }): Promise<User> {
  //   const { where, select } = params;
  //   const user = await this.prisma.user.findUnique({ where, select });
  //   return user;
  // }

  // async findByEmail(email: string) {
  //   return await this.prisma.user.findUnique({ where: { email } });
  // }

  // async update(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   data: UpdateUserDto;
  // }): Promise<User> {
  //   const { where, data } = params;
  //   try {
  //     const user = await this.prisma.user.update({ data, where });
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
  //   try {
  //     const user = await this.prisma.user.delete({ where });
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
