export default interface Category {
  id: number,
  name: string,
  parent: number
};

export interface CategoryFilterValue {
  id: number,
  name: string | number,
}

export interface CategoryFilter {
  id: number,
  name: string,
  values: CategoryFilterValue[]
};
