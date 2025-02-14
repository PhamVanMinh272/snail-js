interface Image {
  id: number,
  name: string,
}

interface Product {
    id: number,
    name: string,
    price: number,
    image?: Array<Image>
  }

export default Product;
