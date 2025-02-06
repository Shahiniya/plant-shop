import nature from "../../../../../assets/hero/nature.png";
import "./style.css";
import bigFlower from '../../../../../assets/hero/big-flower.png'
import smallFlower from '../../../../../assets/hero/small-flower.png'


const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="container">
        <div className="wrapper">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="wrapper">
                    <div className="shopnow">
                      <h4>WELCOME TO GREENSHOP</h4>
                      <h1>LET'S MAKE A BETTER <span className='planet'>PLANET</span></h1>
                     <h5>We are an online plant shop offering a 
                     wide range of cheap and trendy plants. Use our 
                     plants to create an unique Urban Jungle. 
                     Order your favorite plants!</h5>
                     <button>SHOP NOW</button>
                    </div>

                    <div className="flowers">
                      <img src={bigFlower} className='bigflower' alt='flower' />
                      <img src={smallFlower} className="smallflower" alt='flower' />

                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={nature} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={nature} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
