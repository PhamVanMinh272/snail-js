import { useState, useEffect } from "react";
// import Alert from "./components/alert";
// import Button from "./components/Button";
import ListProduct from "./components/ListProduct";
import Product from "./class_objects/product";
import ListCategory from "./components/ListCategory";
import Header from "./components/Header";
import { BASE_URL } from "./common/url_sets";
import "./App.css";
import Category from "./class_objects/category";
import MainContent from "./components/MainContent";
import CategoryDropdown from "./components/CategoryDropdown";
import ProductFilter from "./components/ProductFilter";
import ProductFilterDropdown from "./components/ProductFilterDropdown";

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
        <div className="col-6 justify-content-start">
          <CategoryDropdown handleSelectItem={handleSelectItem}></CategoryDropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-2 d-none d-md-block">
        {/* d-none d-md-block */}
          <ListCategory handleSelectItem={handleSelectItem}></ListCategory>
          <br></br>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 my-content">
          <MainContent
            category={selectedCategory}
          ></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;
