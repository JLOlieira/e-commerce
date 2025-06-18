import { useNavigate } from "react-router-dom";
import "./product.css";
import Rating from "../../components/star-rating/rating";

function Product({ id }) {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate("/product-detail/", { state: id });
  };

  return (
    <div>
      <div className="product-container">
        <div className="top-info">
          <div className="rating">
            <Rating value={id.rating} />
            <span>({id.reviews})</span>
          </div>
          <button className="favorite">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div className="product-image" onClick={goToProductDetail}>
          <img
            src={id.image}
            alt={id.name}
          />
        </div>
        <div className="product-info">
          <h3>{id.name}</h3>
          <p>{id.description}</p>
          <p className="price">
            <span>$</span>{id.price}
          </p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
