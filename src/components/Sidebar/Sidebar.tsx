import { ISidebarProps } from "../../interfaces/Sidebar.interface";

function Sidebar({
  categories,
  selectedCategory,
  handleCategoryChange,
  selectedPriceRange,
  handlePriceRangeChange,
}: ISidebarProps) {
  return (
    <div>
      <div>
        <h3>Categories:</h3>
        <div>
          <input
            type="radio"
            id="all"
            name="categories"
            value="all"
            checked={selectedCategory === "all"}
            onChange={handleCategoryChange}
          />
          <label htmlFor="all">All</label>
        </div>
        {categories?.map((category) => (
          <div key={category}>
            <input
              type="radio"
              id={category}
              name="categories"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h3>Price Ranges:</h3>
        <div>
          <input
            type="radio"
            id="all"
            name="priceRanges"
            value="all"
            checked={selectedPriceRange === "all"}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="all">All Prices</label>
        </div>
        <div>
          <input
            type="radio"
            id="0-50"
            name="priceRanges"
            value="0-50"
            checked={selectedPriceRange === "0-50"}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="0-50">0 - 50</label>
        </div>
        <div>
          <input
            type="radio"
            id="50-100"
            name="priceRanges"
            value="50-100"
            checked={selectedPriceRange === "50-100"}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="50-100">50 - 100</label>
        </div>
        <div>
          <input
            type="radio"
            id="100-150"
            name="priceRanges"
            value="100-150"
            checked={selectedPriceRange === "100-150"}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="100-150">100 - 150</label>
        </div>
        <div>
          <input
            type="radio"
            id="over-150"
            name="priceRanges"
            value="over-150"
            checked={selectedPriceRange === "over-150"}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="over-150">Over 150</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
