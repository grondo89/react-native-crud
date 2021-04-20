import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductDTO, AddProductDTO } from './product.interface';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Delete('/:id')
  async deleteProduct(@Param() params: { id: string }): Promise<string> {
    console.log('controller!', params.id);
    return this.service.deleteProduct(params.id);
  }

  @Post()
  async addProduct(@Body() productData: AddProductDTO): Promise<ProductDTO> {
    console.log(productData, 'BACKEND!');
    return this.service.addProduct(productData);
  }

  @Patch('/:id')
  async updateProduct(
    @Param() params: { id: string },
    @Body() productData: ProductDTO,
  ): Promise<ProductDTO> {
    return await this.service.updateProduct(params.id, productData);
  }

  @Get(':id')
  async getProduct(@Param() params: { id: string }): Promise<ProductDTO> {
    return await this.service.getProduct(params.id);
  }

  @Get('/')
  async getAllProducts(): Promise<ProductDTO[]> {
    return await this.service.getAllProducts();
  }
}
