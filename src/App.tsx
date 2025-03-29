import { useState, useEffect } from "react";
// import Alert from "./components/alert";
// import Button from "./components/Button";
import ListProduct from "./components/ListProduct";
import Product from "./class_objects/product";
import ListCategory from "./components/ListCategory";
import Header from "./components/Header";
import { BASE_URL } from "./common/url_sets";
import "./css/App.css";
import Category from "./class_objects/category";
import MainContent from "./components/MainContent";
import CategoryDropdown from "./components/CategoryDropdown";
import ProductFilter from "./components/ProductFilter";
import ProductFilterDropdown from "./components/ProductFilterDropdown";

function App() {
  // const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const handleSelectItem = (item: Category) => {
    setSelectedCategory(item);
    // setIsLoadingProduct(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <main className="flex-fill">
        <div className="container">
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <ListCategory handleSelectItem={handleSelectItem}></ListCategory>
              <br></br>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 my-content">
              <MainContent category={selectedCategory}></MainContent>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer mt-auto p-0 bg-light sticky-bottom d-sm-block d-md-none d-lg-none d-xl-none">
        <div className="container justify-content-center">
          <span className="text-muted">
            <CategoryDropdown
              handleSelectItem={handleSelectItem}
            ></CategoryDropdown>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
