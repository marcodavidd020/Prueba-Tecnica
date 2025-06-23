import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response.interface';
import { GENERAL_SUCCESS_MESSAGES } from '../../consts/response-messages';
import { HTTP_METHODS } from '../../consts/api-routes';
import { PRODUCT_SUCCESS_MESSAGES } from '../../products/consts/product-messages';
import { HISTORY_SUCCESS_MESSAGES } from '../../history/consts/history-messages';
import { PRODUCT_ROUTE_PATTERNS } from '../../products/consts/product-routes';
import { HISTORY_ROUTE_PATTERNS } from '../../history/consts/history-routes';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest();
    const path = request.url;
    
    return next.handle().pipe(
      map(data => ({
        success: true,
        message: this.getSuccessMessage(path, request.method),
        data,
        timestamp: new Date().toISOString(),
        path
      }))
    );
  }

  private getSuccessMessage(path: string, method: string): string {
    const messages: Record<string, string> = {
      [`${HTTP_METHODS.GET} ${PRODUCT_ROUTE_PATTERNS.BASE}`]: PRODUCT_SUCCESS_MESSAGES.GET_ALL,
      [`${HTTP_METHODS.GET} ${PRODUCT_ROUTE_PATTERNS.SEARCH}`]: PRODUCT_SUCCESS_MESSAGES.SEARCH,
      [`${HTTP_METHODS.GET} ${HISTORY_ROUTE_PATTERNS.BASE}`]: HISTORY_SUCCESS_MESSAGES.GET,
    };

    // Para rutas dinámicas como /products/:id
    if (path.startsWith(PRODUCT_ROUTE_PATTERNS.BY_ID) && method === HTTP_METHODS.GET && !path.includes('search')) {
      return PRODUCT_SUCCESS_MESSAGES.GET_BY_ID;
    }

    if (path.startsWith('/products/search/') && method === HTTP_METHODS.GET) {
      return PRODUCT_SUCCESS_MESSAGES.SEARCH;
    }

    const key = `${method} ${path}`;
    return messages[key] || GENERAL_SUCCESS_MESSAGES.DEFAULT;
  }
} 