import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '@prisma/client';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() data: { name: string; description?: string }): Promise<Item> {
    return this.itemsService.createItem(data);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.getItems();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.getItemById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { name?: string; description?: string }): Promise<Item> {
    return this.itemsService.updateItem(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.deleteItem(Number(id));
  }
}
