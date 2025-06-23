import { ApiProperty } from '@nestjs/swagger';

export class HistoryProductDto {
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
    description: 'Porcentaje de descuento',
    example: 12.96,
    required: false,
  })
  discountPercentage?: number;

  @ApiProperty({
    description: 'Calificación del producto',
    example: 4.69,
    required: false,
  })
  rating?: number;

  @ApiProperty({
    description: 'Stock disponible',
    example: 94,
    required: false,
  })
  stock?: number;

  @ApiProperty({
    description: 'Marca del producto',
    example: 'Apple',
    required: false,
  })
  brand?: string;

  @ApiProperty({
    description: 'Categoría del producto',
    example: 'smartphones',
    required: false,
  })
  category?: string;

  @ApiProperty({
    description: 'URL de la imagen miniatura',
    example: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  })
  thumbnail: string;

  @ApiProperty({
    description: 'URLs de las imágenes del producto',
    type: [String],
    required: false,
    example: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg'
    ],
  })
  images?: string[];
}

export class HistoryResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo de la operación',
    example: 'Historial obtenido exitosamente',
  })
  message: string;

  @ApiProperty({
    description: 'Lista de productos del historial (máximo 5 elementos)',
    type: [HistoryProductDto],
  })
  data: HistoryProductDto[];

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/history',
  })
  path: string;
} 