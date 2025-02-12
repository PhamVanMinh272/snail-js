import { useState, useEffect } from "react";
// import Alert from "./components/alert";
// import Button from "./components/Button";
import ListProduct from "./components/ListProduct";
import Product from "./class_objects/product";
import ListCategory from "./components/ListCategory";
import Header from "./components/Header";
import { BASE_URL } from "./url_sets";
import './App.css'
import Category from "./class_objects/category";

function App() {
  // let items = ["New york", "Losangles", "Califolia", "London", "Yokyo"];
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [products, setProducts] = useState<Product[]>([]);
  const handleSelectItem = (item: Category) => {
    setSelectedCategory(item);
  };
  const [alertVisable, setAlertVisibility] = useState(false);

  // call api
  useEffect(() => {
    console.log(selectedCategory)
    const fetchProducts = async () => {
      let response;
      if (selectedCategory) {
        response = await fetch(`${BASE_URL}/products?categoryId=${selectedCategory.id}`);
      }
      else {
        response = await fetch(`${BASE_URL}/products`);
      }
      
      const response_data = await response.json();
      const fetched_products = response_data.data as Product[];
      // console.log(fetched_products);
      setProducts(fetched_products);
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    
    <div className="container">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-2">
          <ListCategory handleSelectItem={handleSelectItem}></ListCategory>
          <br></br>
        </div>
        <div className="col-10 my-content">
          <ListProduct
            products={products}
            heading={selectedCategory? `Trang Chủ / ${selectedCategory.name}` : "Trang Chủ"}
            onSelectItem={() => {}}
          />
        </div>
      </div>
      
      {/* {alertVisable && <Alert onClose={() => setAlertVisibility(false)}>Hello Minh</Alert>} */}
      {/* <Button onClick={() => setAlertVisibility(true)}>My button</Button> */}
    </div>
  );
}

export default App;
