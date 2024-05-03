import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data: data });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProduct(id: number): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async updateProduct(id: number, data: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
