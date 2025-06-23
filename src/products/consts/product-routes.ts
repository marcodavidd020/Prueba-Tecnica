// External API Routes for Products
export const PRODUCT_API_ROUTES = {
  BASE: 'products',
  BY_ID: (id: string) => `products/${id}`,
  SEARCH: (query: string) => `products/search?q=${query}`,
} as const;

// Internal API Routes for Products
export const PRODUCT_INTERNAL_ROUTES = {
  BASE: 'products',
  SEARCH: 'search',
} as const;

// Route patterns for products
export const PRODUCT_ROUTE_PATTERNS = {
  BASE: '/products',
  BY_ID: '/products/',
  SEARCH: '/products/search',
} as const;