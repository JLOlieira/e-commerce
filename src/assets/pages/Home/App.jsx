import CategoryCard from "../../components/Category-card/category-card";
import Header from "../../components/Header/header";
import Product from "../../components/Product/product";
import BrandCard from "../../components/Brand-card/brand-card";
import Footer from "../../components/Footer/footer";
import "./App.css";
import products from "../../data/products.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-banner">
        <img src="/hb-special-offer.png" alt="hero-banner" />
      </div>
      <div className="container">
        <section className="categories">
          <h2>Shop our top categories</h2>
          <div className="categories-container">
            <CategoryCard
              name={"Smartphones"}
              image={"https://t2.tudocdn.net/720005?w=824&h=494"}
            />
            <CategoryCard
              name={"Computers & Laptops"}
              image={
                "https://flexitdistribution.com/wp-content/uploads/2023/06/Significant-growth-is-projected-for-the-global-refurbished-computers-and-laptops-market-2.jpg"
              }
            />
            <CategoryCard
              name={"Gaming Gear"}
              image={
                "https://img.freepik.com/premium-photo/top-view-gaming-gear_160097-846.jpg"
              }
            />
            <CategoryCard
              name={"Smart Home"}
              image={
                "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24714702/236676_03_From_brilliant_to_basic_here_are_our_smart_home_setups_SHaddad.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100"
              }
            />
            <CategoryCard
              name={"Wearables"}
              image={
                "https://imgproxy.divecdn.com/2CI5pwyz0BamkgUioMzWlKA8-U7P2KuU6uDr_tqgRJs/g:nowe:0:64/c:1237:699/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9TY3JlZW5zaG90XzIwMjAtMDgtMjRfYXRfMTAuMTIuNTRfQU0ucG5n.webp"
              }
            />
            <CategoryCard
              name={"Audio & Video"}
              image={
                "https://blog.saramonic.com.br/wp-content/uploads/2025/05/Design-sem-nome-3.jpg"
              }
            />
          </div>
        </section>
        <section className="product-list">
          <h2>Todays Best Deals for you!</h2>
          <div className="product-list-container">
            {products.todaysProducts.map((product) => (
              <Product key={product.id} id={product} />
            ))}
          </div>
        </section>

        <section className="brands">
          <h2>Choose by brands</h2>
          <div className="brands-container">
            <BrandCard
              name={"Apple"}
              image={
                "https://yt3.googleusercontent.com/_CvUFHWdEuOCLcBWy8FLoflAibIIBpBBTQPlEBLhP5-YQT8LbvEIIeqz6k3ZCTNvb1aP3UsR6ME=s900-c-k-c0x00ffffff-no-rj"
              }
              description={"Best brand for your macbook"}
            />
            <BrandCard
              name={"Samsung"}
              image={
                "https://static.vecteezy.com/ti/vetor-gratis/p1/20927451-samsung-marca-logotipo-telefone-simbolo-nome-branco-projeto-sul-coreano-movel-ilustracao-com-azul-fundo-gratis-vetor.jpg"
              }
              description={"Best brand for your smartwatch"}
            />
            <BrandCard
              name={"Sony"}
              image={
                "https://www.blugraphic.com/wp-content/uploads/2014/05/Sony2.jpg"
              }
              description={"Best brand for your tv"}
            />
            <BrandCard
              name={"LG"}
              image={
                "https://gkpb.com.br/wp-content/uploads/2023/04/LG-apresenta-mudancas-em-sua-identidade-visual-2.jpg"
              }
              description={"Best brand for your laptop"}
            />
            <BrandCard
              name={"Asus"}
              image={
                "https://press.asus.com/assets/w_767,h_431/fa3cbcd7-e826-45f9-885e-1d3470be3952/20220801101712676.jpg"
              }
              description={"Best brand for your pc"}
            />
            <BrandCard
              name={"Dell"}
              image={"https://www.freeiconspng.com/uploads/dell-icon-9.png"}
              description={"Best brand for your pc"}
            />
          </div>
        </section>
      </div>
      <div className="discount-banner">
        <div>
          <h2>Get 5% Cash Back</h2>
          <p>
            with <span>TechStore</span> card
          </p>
          <button>Learn More</button>
        </div>
        <img className="discount-banner-img" src="./src/assets/img/cards.png" alt="discount-banner" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
