import { from } from "rxjs";
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { ProductServise } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductServise) { }


    @Post()
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesciption: string,
        @Body('price') prodPrice: number,) {

        const generatedId = await this.productsService.insertProduct(prodTitle, prodDesciption, prodPrice);
        return { id: generatedId };
    }
    @Get()
    async getAllProducts() {
        const products = await this.productsService.getProducts();
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDescription: string, @Body('price') prodPrice: number) {
        this, await this.productsService.updateProduct(prodId, prodTitle, prodDescription, prodPrice);
        return null;

    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productsService.deleteProduct(prodId);
        return null;
    }
}


