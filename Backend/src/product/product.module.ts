import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './product.interface';
import { PRODUCT_MODEL_NAME } from './product.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PRODUCT_MODEL_NAME,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
