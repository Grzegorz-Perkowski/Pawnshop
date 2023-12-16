import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
} from "@mui/material";
import { ISidebarProps } from "../../interfaces/Sidebar.interface";

function Sidebar({
  categories,
  selectedCategory,
  handleCategoryChange,
  selectedPriceRange,
  handlePriceRangeChange,
}: ISidebarProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <div>
        <Typography variant="h3" mb={2} color="primary">
          Categories:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="categories"
            name="categories"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label={<Typography fontSize="2rem">All</Typography>}
            />
            {categories?.map((category) => (
              <FormControlLabel
                key={category}
                value={category}
                control={<Radio />}
                label={<Typography fontSize="2rem">{category}</Typography>}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <Typography variant="h3" mb={2} color="primary">
          Price Ranges:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="priceRanges"
            name="priceRanges"
            value={selectedPriceRange}
            onChange={handlePriceRangeChange}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label={<Typography fontSize="2rem">All Prices</Typography>}
            />
            <FormControlLabel
              value="0-50"
              control={<Radio />}
              label={<Typography fontSize="2rem">0 - 50</Typography>}
            />
            <FormControlLabel
              value="50-100"
              control={<Radio />}
              label={<Typography fontSize="2rem">50 - 100</Typography>}
            />
            <FormControlLabel
              value="100-150"
              control={<Radio />}
              label={<Typography fontSize="2rem">100 - 150</Typography>}
            />
            <FormControlLabel
              value="over-150"
              control={<Radio />}
              label={<Typography fontSize="2rem">Over 150</Typography>}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Box>
  );
}

export default Sidebar;
