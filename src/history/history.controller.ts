import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HISTORY_INTERNAL_ROUTES } from './consts/history-routes';
import { HistoryProduct } from './history.models';
import { HistoryResponseDto } from './dto/history-response.dto';

@ApiTags('Historial')
@Controller(HISTORY_INTERNAL_ROUTES.BASE)
export class HistoryController {
    constructor(private readonly historyService: HistoryService) {}

    @Get()
    @ApiOperation({ 
      summary: 'Obtener historial de productos',
      description: 'Obtiene el historial de productos visitados (máximo 5 elementos)' 
    })
    @ApiResponse({ 
      status: 200, 
      description: 'Historial obtenido exitosamente',
      type: HistoryResponseDto 
    })
    async getHistory(): Promise<HistoryProduct[]> {
        return this.historyService.getHistory();
    }
} 