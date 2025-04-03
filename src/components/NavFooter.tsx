import Category from "../class_objects/category";
import CategoryDropdown from "./CategoryDropdown";

interface Props {
  handleSelectItem: (item: Category) => void;
  categories: Category[];
}

function NavFooter({ handleSelectItem, categories }: Props) {
  return (
    <footer className="footer mt-auto p-0 sticky-bottom d-sm-block d-md-none d-lg-none d-xl-none">
      <CategoryDropdown handleSelectItem={handleSelectItem} categories={categories}></CategoryDropdown>
    </footer>
  );
}

export default NavFooter;
