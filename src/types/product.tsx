export interface Image {
  id: number,
  name: string,
}

export interface Product {
    id: number,
    name: string,
    price: number,
    image?: Array<Image>
  }

export default Product;
