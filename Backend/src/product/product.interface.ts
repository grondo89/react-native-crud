import { Document, Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  quantityHistory: Array,
  imageUrl: { type: String, required: false },
});

export class AddProductDTO {
  name: string;
  price: number;
  quantity: number;
  quantityHistory: number;
  imageUrl: string;
}

export class ProductDTO {
  name: string;
  price: number;
  quantity: number;
  quantityHistory: number[];
  imageUrl: string;
}

export interface ProductMongoose extends ProductDTO, Document {}
