import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { IProduct } from "products-types";
import CircularLoader from "../CircularProgress/CircularProgress";

const ProductDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id));

  if (isLoading) {
    return <CircularLoader />;
  }

  if (isError) {
    return <div>Error loading beer details</div>;
  }

  if (!product) {
    return <div>No data available</div>;
  }

  const { title, price, description, category, image, rating }: IProduct =
    product;

  return (
    <div>
      <p>Product details</p>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{rating.rate}</p>
      <p>{rating.count}</p>
    </div>
  );
};

export default ProductDetails;
