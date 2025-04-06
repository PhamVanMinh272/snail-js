export default interface Category {
  id: number,
  name: string,
  parent: number
};

export interface CategoryFilter {
  id: number,
  name: string
};
