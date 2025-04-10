import Category from "../../types/category";

interface Props {
  handleSelectItem: (item: Category) => void;
  categories: Category[];
}

function CategoryDropdown({ handleSelectItem, categories }: Props) {

  return (
    <>
      <div className="d-flex flex-column my-category-list">
        <div className="m-auto">
          <button className="category-collapse-btn m-0" data-bs-toggle="collapse"
            data-bs-target="#collapseCategory"><i className="bi bi-list-ul"></i> Danh Mục</button>
        </div>
      </div>
      <ul className="list-group collapse mb-3" id="collapseCategory">
        {categories.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => {
              handleSelectItem(item);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryDropdown;
