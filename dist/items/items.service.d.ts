import { PrismaClient, Item } from '@prisma/client';
export declare class ItemsService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    createItem(data: {
        name: string;
        description?: string;
    }): Promise<Item>;
    getItems(): Promise<Item[]>;
    getItemById(id: number): Promise<Item>;
    updateItem(id: number, data: {
        name?: string;
        description?: string;
    }): Promise<Item>;
    deleteItem(id: number): Promise<Item>;
}
