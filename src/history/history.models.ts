export interface HistoryProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail: string;
  images?: string[];
}

export interface HistoryData {
  products: HistoryProduct[];
} 