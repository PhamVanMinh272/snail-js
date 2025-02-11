interface Product {
    id: number,
    name: string,
    price: number,
    image?: {
      id: number,
      name: string,
    }
  }

export default Product;
