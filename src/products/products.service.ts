import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HistoryService } from '../history/history.service';
import { Product, ProductApiResponse, ProductsApiResponse, SearchProductsApiResponse } from './products.models';
import { HistoryProduct } from '../history/history.models';
import { PRODUCT_API_ROUTES } from './consts/product-routes';
import { PRODUCT_ERROR_MESSAGES } from './consts/product-messages';
import { GENERAL_ERROR_MESSAGES } from '../consts/response-messages';

@Injectable()
export class ProductsService {

    constructor(private readonly httpService: HttpService, private readonly historyService: HistoryService) {}

    async fetchProducts(id: string): Promise<Product> {
        try {
            const url = PRODUCT_API_ROUTES.BY_ID(id);
            const response = await firstValueFrom(this.httpService.get<ProductApiResponse>(url));
            // Convert ProductApiResponse to HistoryProduct
            const historyProduct: HistoryProduct = {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                price: response.data.price,
                discountPercentage: response.data.discountPercentage,
                rating: response.data.rating,
                stock: response.data.stock,
                brand: response.data.brand,
                category: response.data.category,
                thumbnail: response.data.thumbnail,
                images: response.data.images,
            };
            this.historyService.addProductToHistory(historyProduct);
            return {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                price: response.data.price,
                thumbnail: response.data.thumbnail,
            };
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                throw new HttpException(GENERAL_ERROR_MESSAGES.NETWORK.TIMEOUT, HttpStatus.REQUEST_TIMEOUT);
            }
            throw new HttpException(PRODUCT_ERROR_MESSAGES.FETCH_ERROR, HttpStatus.BAD_GATEWAY);
        }
    }

    // Get all products
    async fetchAllProducts(): Promise<Product[]> {
        try {
            const url = PRODUCT_API_ROUTES.BASE;
            const response = await firstValueFrom(this.httpService.get<ProductsApiResponse>(url));
            // Filtrar campos deseados
            return response.data.products.map((p: ProductApiResponse): Product => ({
                id: p.id,
                title: p.title,
                description: p.description,
                price: p.price,
                thumbnail: p.thumbnail,
            }));
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                throw new HttpException(GENERAL_ERROR_MESSAGES.NETWORK.TIMEOUT, HttpStatus.REQUEST_TIMEOUT);
            }
            throw new HttpException(PRODUCT_ERROR_MESSAGES.FETCH_ALL_ERROR, HttpStatus.BAD_GATEWAY);
        }
    }

    // Get products by search query
    async searchProducts(query: string): Promise<Product[]> {
        try {
            const url = PRODUCT_API_ROUTES.SEARCH(query);
            const response = await firstValueFrom(this.httpService.get<SearchProductsApiResponse>(url));
            // Filtrar campos deseados
            return response.data.products.map((p: ProductApiResponse): Product => ({
                id: p.id,
                title: p.title,
                description: p.description,
                price: p.price,
                thumbnail: p.thumbnail,
            }));
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                throw new HttpException(GENERAL_ERROR_MESSAGES.NETWORK.TIMEOUT, HttpStatus.REQUEST_TIMEOUT);
            }
            throw new HttpException(PRODUCT_ERROR_MESSAGES.SEARCH_ERROR, HttpStatus.BAD_GATEWAY);
        }
    }
}