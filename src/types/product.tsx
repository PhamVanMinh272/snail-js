export interface Image {
  id: number,
  name: string,
}

export interface Product {
    id: number,
    name: string,
    price: number,
    images?: Array<Image>
  }

export interface ProductQueryParams {
  categoryId?: number;
  sortPrice?: string;
  brandIds?: Array<number>;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

export default Product;
