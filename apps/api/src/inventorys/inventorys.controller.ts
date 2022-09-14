import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventorysService } from './inventorys.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@ApiTags('inventorys')
@Controller('inventorys')
export class InventorysController {
  constructor(private readonly inventorysService: InventorysService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventorysService.create(createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventorysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventorysService.findById(id);
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.inventorysService.findByUser(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventorysService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventorysService.remove(id);
  }
}
