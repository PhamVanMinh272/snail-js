import { useState, useEffect } from "react";
// import Alert from "./components/alert";
// import Button from "./components/Button";
import ListProduct from "./components/ListProduct";
import Product from "./class_objects/product";
import ListCategory from "./components/ListCategory";
import Header from "./components/Header";
import BASE_URL from "./url_sets";
import './App.css'

function App() {
  // let items = ["New york", "Losangles", "Califolia", "London", "Yokyo"];
  const [products, setProducts] = useState<Product[]>([]);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisable, setAlertVisibility] = useState(false);

  // call api
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${BASE_URL}/products`);
      const response_data = await response.json();
      const fetched_products = response_data.data as Product[];
      console.log(fetched_products);
      setProducts(fetched_products);
    };

    fetchProducts();
  }, []);

  return (
    
    <div className="container">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-2">
          <ListCategory></ListCategory>
          <br></br>
        </div>
        <div className="col-10">
          <ListProduct
            products={products}
            heading="Ống Cầu Lông"
            onSelectItem={handleSelectItem}
          />
        </div>
      </div>
      
      {/* {alertVisable && <Alert onClose={() => setAlertVisibility(false)}>Hello Minh</Alert>} */}
      {/* <Button onClick={() => setAlertVisibility(true)}>My button</Button> */}
    </div>
  );
}

export default App;
