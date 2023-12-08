import { Link } from "@mui/material";
import { Product } from "../../interfaces/Product.interface";

export default function ProductItem({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  return (
    <div>
      <p>{id}</p>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{rating.rate}</p>
      <p>{rating.count}</p>
      <Link href={`/products/${id}`}>View</Link>
    </div>
  );
}
