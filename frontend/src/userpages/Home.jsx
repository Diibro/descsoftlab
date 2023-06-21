import Soft1 from '../assets/page/soft_1.jpg';
import Elect1 from '../assets/page/elect_1.jpg';

const Home = () => {
  return (
    <div className="home_page">
      <div className="home_sec1">
        <div className="row">
          <div className="col">
            <h1>Unlock the power of Digital transformation with <span>Our IT Services</span></h1>
            <div className="getInTouch">
              <p>Work with our team of experinced <span>Software and Electronic Engineers</span></p>
              <button>Get Started</button>
            </div>
          </div>
          <div className="col">
            <img src={Soft1} alt="" />
            <img src={Elect1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;