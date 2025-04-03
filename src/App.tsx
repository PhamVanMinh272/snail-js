import { useState } from "react";
import ListCategory from "./components/content/ListCategory";
import Header from "./components/common/Header";
import Category from "./types/category";
import MainContent from "./components/content/MainContent";
import NavFooter from "./components/content/NavFooter";
import Footer from "./components/common/Footer";
import { useCategories } from "./hooks/useCategories";

function App() {
  const { categories, isLoadingProduct, setIsLoadingProduct } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const handleSelectCategory = (item: Category) => {
    setSelectedCategory(item);
    setIsLoadingProduct(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <main className="flex-fill">
        <div className="container">
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <ListCategory
                handleSelectItem={handleSelectCategory}
                categories={categories}
              ></ListCategory>
              <br></br>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 my-content">
              <MainContent
                category={selectedCategory}
                isLoadingProduct={isLoadingProduct}
                setIsLoadingProduct={setIsLoadingProduct}
              ></MainContent>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <NavFooter
        handleSelectItem={handleSelectCategory}
        categories={categories}
      ></NavFooter>
    </div>
  );
}

export default App;
