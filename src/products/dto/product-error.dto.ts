import { ApiProperty } from '@nestjs/swagger';

export class ProductErrorDto {
  @ApiProperty({
    description: 'Indica que la operación falló',
    example: false,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje de error',
    example: 'Error al obtener el producto',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp del error',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/products/1',
  })
  path: string;
}

export class ProductTimeoutErrorDto {
  @ApiProperty({
    description: 'Indica que la operación falló',
    example: false,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje de error de timeout',
    example: 'Tiempo de espera agotado - La API está tardando demasiado en responder',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp del error',
    example: '2023-06-23T15:30:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Ruta del endpoint',
    example: '/products/1',
  })
  path: string;
} 