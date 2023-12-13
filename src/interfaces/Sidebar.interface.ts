export interface ISidebarProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedPriceRange: string;
  handlePriceRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}