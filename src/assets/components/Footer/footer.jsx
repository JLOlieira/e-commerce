import "./footer.css";

function DownFooter() {
  return (
    <div className="down-footer">
      <div>
        <span>Become Seller</span>
        <span>Gift Cards</span>
        <span>Help Center</span>
      </div>
      <div>
        <span>Terms of Service</span>
        <span>Privacy & Policy</span>
      </div>
      <p>
        All Right reserved by Lukas Oliveira - Front-end Developer | 2025
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div>
            <img
              src="/public/techstore-berhad.png"
              alt="techstore-logo"
            />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="accepted-payments-container">
            <h3>Accepted Payments</h3>
            <div className="accepted-payments">
              <img src="https://logopng.com.br/logos/visa-17.png" alt="visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" alt="apple pay" />
              <img src="https://logopng.com.br/logos/google-pay-38.png" alt="google pay" />
              <img src="https://thechocolateworkshop.co.uk/wp-content/uploads/2017/04/Paypal-Logo-PNG.png" alt="paypal" />
              <img src="https://w7.pngwing.com/pngs/1002/997/png-transparent-amex-payment-method-card-icon-thumbnail.png" alt="amex" />
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <h3>Departments</h3>
            <li>Smartphones & Accessories</li>
            <li>Computers & Laptops</li>
            <li>Audio & Headphones</li>
            <li>Smart Home</li>
            <li>Gaming</li>
            <li>Storage & SSDs</li>
            <li>Imaging & Photography</li>
            <li>Wearables & Gadgets</li>
            <li>Power & Charging</li>
          </ul>
          <ul>
            <h3>About Us</h3>
            <li>About Tech Store</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
            <li>Press Center</li>
            <li>Shop by location</li>
            <li>TechStore brands</li>
          </ul>
          <ul>
            <h3>Services</h3>
            <li>Gift card</li>
            <li>Mobile App</li>
            <li>Shipping & Delivery</li>
            <li>Order Pickup</li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>Shopcart Help</li>
            <li>Returns</li>
            <li>track orders</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
      <DownFooter />
    </div>
  );
}

export default Footer;
