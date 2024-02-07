import { ItemsService } from './items.service';
import { Item } from '@prisma/client';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(data: {
        name: string;
        description?: string;
    }): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: string, data: {
        name?: string;
        description?: string;
    }): Promise<Item>;
    remove(id: string): Promise<Item>;
}
