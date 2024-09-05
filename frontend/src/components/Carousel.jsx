import small1 from '../assets/slide1.png';
import small2 from '../assets/slide2.jpg';
import small4 from '../assets/slide3.jpg';

const Carousel = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 overflow-hidden">
      <div className="w-100 h-100 position-relative">
        <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            <div className="carousel-item active">
              <img className="d-block w-100 h-100" src={small2} alt="Third slide" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={small1} alt="Second slide" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={small4} alt="First slide" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
