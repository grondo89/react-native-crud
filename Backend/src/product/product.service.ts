import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PRODUCT_MODEL_NAME } from './product.constants';
import {
  AddProductDTO,
  ProductDTO,
  ProductMongoose,
} from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(PRODUCT_MODEL_NAME)
    private readonly productModel: Model<ProductMongoose>,
  ) {}

  async getProduct(productId: string): Promise<ProductDTO> {
    const foundProduct = await this.productModel.findById(productId);
    if (!foundProduct) {
      throw new NotFoundException(`Account request ${productId} not found`);
    }
    return foundProduct;
  }

  async getAllProducts(): Promise<ProductDTO[]> {
    const result = await this.productModel.find();
    return result;
  }

  async addProduct(newProductData: AddProductDTO): Promise<ProductDTO> {
    const { quantity } = newProductData;
    const newApplication = new this.productModel(newProductData);
    newApplication.quantityHistory.push(quantity);

    return await newApplication.save();
  }

  async deleteProduct(productId: string): Promise<string> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productId);
    console.log('provider!!', deletedProduct);
    return deletedProduct.id;
  }

  async updateProduct(
    productId: string,
    updatedProductData: ProductDTO,
  ): Promise<ProductDTO> {
    const { quantity, quantityHistory, price, name } = updatedProductData;
    quantityHistory.push(quantity);
    const updatedProductResponse = await this.productModel.findByIdAndUpdate(
      productId,
      { name, price, quantity, quantityHistory },
    );
    return updatedProductResponse.id;
  }

  async masiveAddApplications(applicationList: any[]): Promise<ProductDTO[]> {
    const newApplications = await this.productModel.insertMany(applicationList);

    const nicerApplications = newApplications.map((app) => {
      return app;
    });

    return nicerApplications;
  }
}
