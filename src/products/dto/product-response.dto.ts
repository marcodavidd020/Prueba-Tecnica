import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    description: 'ID único del producto',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'iPhone 9',
  })
  title: string;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'An apple mobile which is nothing like apple',
  })
  description: string;

  @ApiProperty({
    description: 'Precio del producto',
    example: 549,
  })
  price: number;

  @ApiProperty({
    description: 'URL de la imagen miniatura',
    example: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  })
  thumbnail: string;
}

export class ProductResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo de la operación',
    example: 'Producto obtenido exitosamente',
  })
  message: string;

  @ApiProperty({
    description: 'Datos del producto',
    type: ProductDto,
  })
  data: ProductDto;

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/products/1',
  })
  path: string;
}

export class ProductsListResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo de la operación',
    example: 'Productos obtenidos exitosamente',
  })
  message: string;

  @ApiProperty({
    description: 'Lista de productos',
    type: [ProductDto],
  })
  data: ProductDto[];

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/products',
  })
  path: string;
}

export class ProductSearchResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo de la operación',
    example: 'Búsqueda de productos realizada exitosamente',
  })
  message: string;

  @ApiProperty({
    description: 'Productos encontrados',
    type: [ProductDto],
  })
  data: ProductDto[];

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/products/search/phone',
  })
  path: string;
} 