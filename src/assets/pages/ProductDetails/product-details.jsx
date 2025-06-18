import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./product-details.css";
import BuyButton from "../../components/buyButton/buy-button";
import Rating from "../../components/star-rating/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    const value = parseInt((event.target.value || 1).trim());
    if (!isNaN(value)) {
      setQuantity(Math.max(1, value));
    } else {
      setQuantity(1);
    }
  };

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const { state: id } = useLocation();
  if (!id) return <div style={{ color: "red" }}>Product not found</div>;

  
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <nav>
          <button onClick={goToHome}>
            <FontAwesomeIcon icon={faAngleLeft} />
            Back to Home
          </button>
        </nav>
        <div className="p-container">
          <div className="product-img-container">
            <img src={id.image} alt={id.name} />
            <div className="more-img-container">
              <img src={id.image} alt={id.name} />
              <img src={id.image} alt={id.name} />
            </div>
          </div>
          <div className="product-info">
            <div className="top-info">
              <h2>{id.name}</h2>
              <p>{id.description}</p>
              <div className="rating">
                <Rating value={id.rating} />
                <span>({id.reviews})</span>
              </div>
            </div>
            <div className="price">
              <p>
                <span>$</span>
                {id.price}
              </p>
            </div>
            <div className="colors">
              <h3>Colors</h3>
              <div>
                {id.colors.map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="checkout">
              <div className="quantity">
                <div>
                  <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                  <input className="quantity-input" type="number" value={quantity} onChange={handleChange} min={1} />
                  <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <p>
                  Only <span>{id.quantity} items </span>left!
                </p>
              </div>
              <div className="buy-now">
                <BuyButton classname={"buy"} text={"Buy Now"} />
                <BuyButton classname={"add-to-cart"} text={"Add to Cart"} />
              </div>
            </div>
            <div className="delivery">
              <span>
                <span>
                  <FontAwesomeIcon icon={faTruck} />
                </span>
                Free delivery
              </span>
              <a>Enter your Postal Code</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
