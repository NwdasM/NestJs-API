import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductServise } from './products.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from './product.model';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductsController],
    providers: [ProductServise],
})


export class ProductsModule { }