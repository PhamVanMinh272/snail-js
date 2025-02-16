import { useState, useEffect } from "react";
// import Alert from "./components/alert";
// import Button from "./components/Button";
import ListProduct from "./components/ListProduct";
import Product from "./class_objects/product";
import ListCategory from "./components/ListCategory";
import Header from "./components/Header";
import { BASE_URL } from "./url_sets";
import "./App.css";
import Category from "./class_objects/category";
import MainContent from "./components/MainContent";

function App() {
  // let items = ["New york", "Losangles", "Califolia", "London", "Yokyo"];
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const handleSelectItem = (item: Category) => {
    setSelectedCategory(item);
    // setvisableComponent(false);
  };

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
          <MainContent
            category={selectedCategory}
          ></MainContent>
        </div>
      </div>

      {/* {alertVisable && <Alert onClose={() => setAlertVisibility(false)}>Hello Minh</Alert>} */}
      {/* <Button onClick={() => setAlertVisibility(true)}>My button</Button> */}
    </div>
  );
}

export default App;
