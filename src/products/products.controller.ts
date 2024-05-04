import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '.prisma/client';
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() data: Prisma.ProductCreateInput): Promise<Product> {
    return this.productsService.createProduct(data);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProduct(+id);
  }

  @Get(':tags')
    findByTags(@Body() data: Partial<Product>): Promise<Product[]>{
      const tags = data.tag;
      return this.productsService.getProductsByTag(tags)
    }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Product>): Promise<Product> {
    return this.productsService.updateProduct(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.deleteProduct(+id);
  }
}
