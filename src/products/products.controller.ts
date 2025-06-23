import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PRODUCT_INTERNAL_ROUTES } from './consts/product-routes';
import { ProductResponseDto, ProductsListResponseDto, ProductSearchResponseDto } from './dto/product-response.dto';
import { ProductErrorDto, ProductTimeoutErrorDto } from './dto/product-error.dto';

@ApiTags('Productos')
@Controller(PRODUCT_INTERNAL_ROUTES.BASE)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}


    @Get(`${PRODUCT_INTERNAL_ROUTES.SEARCH}/:query`)
    @ApiOperation({ 
      summary: 'Buscar productos',
      description: 'Busca productos por término de búsqueda' 
    })
    @ApiParam({ 
      name: 'query', 
      description: 'Término de búsqueda', 
      example: 'phone' 
    })
    @ApiResponse({ 
      status: 200, 
      description: 'Búsqueda realizada exitosamente',
      type: ProductSearchResponseDto 
    })
    @ApiResponse({ 
      status: 408, 
      description: 'Timeout de la solicitud',
      type: ProductTimeoutErrorDto 
    })
    @ApiResponse({ 
      status: 502, 
      description: 'Error del servidor externo',
      type: ProductErrorDto 
    })
    async searchProducts(@Param('query') query: string) {
      return this.productsService.searchProducts(query);
    }
    
    @Get(':id')
    @ApiOperation({ 
      summary: 'Obtener producto por ID',
      description: 'Obtiene un producto específico por su ID' 
    })
    @ApiParam({ 
      name: 'id', 
      description: 'ID del producto', 
      example: '1' 
    })
    @ApiResponse({ 
      status: 200, 
      description: 'Producto obtenido exitosamente',
      type: ProductResponseDto 
    })
    @ApiResponse({ 
      status: 408, 
      description: 'Timeout de la solicitud',
      type: ProductTimeoutErrorDto 
    })
    @ApiResponse({ 
      status: 502, 
      description: 'Error del servidor externo',
      type: ProductErrorDto 
    })
    async getProductById(@Param('id') id: string) {
      return this.productsService.fetchProducts(id);
    }
    
    @Get()
    @ApiOperation({ 
      summary: 'Obtener todos los productos',
      description: 'Obtiene la lista completa de productos disponibles' 
    })
    @ApiResponse({ 
      status: 200, 
      description: 'Productos obtenidos exitosamente',
      type: ProductsListResponseDto 
    })
    @ApiResponse({ 
      status: 408, 
      description: 'Timeout de la solicitud',
      type: ProductTimeoutErrorDto 
    })
    @ApiResponse({ 
      status: 502, 
      description: 'Error del servidor externo',
      type: ProductErrorDto 
    })
    async getAllProducts() {
      return this.productsService.fetchAllProducts();
    }
}

