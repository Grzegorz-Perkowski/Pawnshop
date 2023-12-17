declare module 'filters-types' {
  interface IFilterOptionsProps {
    categories: string[];
    selectedCategory: string;
    handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedPriceRange: string;
    handlePriceRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
}