import imgLogo from '../assets/images/logo.png';
import imgFounder from '../assets/founder.jpg';
import imgRestaurant from '../assets/restaurant.jpg';
import imgCuisine from '../assets/cuisine.jpg';
import imgServices from '../assets/service.png';
import imgMission from '../assets/mission.jpg';
import imgVision from '../assets/vision.avif';

const AboutUs = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-5 mt-5">
        <h1 className="display-4 mb-3">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><a href="#">ABC Restaurant</a></li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>

      {/* Our Story Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img src={imgLogo} alt="ABC Restaurant Logo" className="img-fluid rounded mb-4 mb-md-0" />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Our Story</h3>
          <p className="text-muted">
            Since 1996, ABC Restaurant has been serving the community with a passion for food and a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgFounder} alt="Founder" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Founder</h5>
              <p className="card-text">
                Meet our founder, who has been instrumental in shaping the culinary journey of ABC Restaurant.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgRestaurant} alt="Restaurant" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Restaurant</h5>
              <p className="card-text">
                Our restaurant is designed to provide a warm and inviting atmosphere, perfect for a night out with family and friends.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgCuisine} alt="Cuisine" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Cuisine</h5>
              <p className="card-text">
                We offer a diverse range of cuisines, from traditional favorites to international flavors, catering to all tastes and preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgServices} alt="Services" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Services</h5>
              <p className="card-text">
                We provide a range of services, including catering, takeout, and delivery, to make your dining experience convenient and enjoyable.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgMission} alt="Mission" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Our mission is to provide exceptional food, outstanding service, and a memorable dining experience that exceeds our customers expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm">
            <img src={imgVision} alt="Vision" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                Our vision is to be the leading restaurant in the community, known for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
