import { Injectable } from '@nestjs/common';
import { PrismaClient, Item } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaClient) {}

  async createItem(data: { name: string; description?: string }): Promise<Item> {
    return this.prisma.item.create({
      data,
    });
  }

  async getItems(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async getItemById(id: number): Promise<Item> {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async updateItem(id: number, data: { name?: string; description?: string }): Promise<Item> {
    return this.prisma.item.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: number): Promise<Item> {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
