export interface ProductApiResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface ProductsApiResponse {
  products: ProductApiResponse[];
  total: number;
  skip: number;
  limit: number;
}

export interface SearchProductsApiResponse {
  products: ProductApiResponse[];
  total: number;
  skip: number;
  limit: number;
} 