// import Soft1 from '../assets/page/soft_1.jpg';
// import Elect1 from '../assets/page/elect_1.jpg';
// import Amazon from 
import Image1 from '../assets/test/comp1-R.png';
import Navitrans from "../assets/partners/Navitrans2-r.png";
import Ikuzo from "../assets/partners/IkuzoR.png";
import Inuma from "../assets/partners/inuma.png";
import {NavLink} from 'react-router-dom';
import Acorns from "../assets/partners/AcornsR.png";
import Levy from "../assets/partners/levy.png";

const partners = [
  {
    name: "Navitrans Rwanda",
    logo: Navitrans,
    url: "https://www.amazon.com"
  },
  {
    name: "Ikuzo Tech Group",
    logo:Ikuzo,
    url: "https://ikuzotechnologies.com/"
  },
  {
    name: "Inuma Technologies",
    logo: Inuma,
    url: "https://www.inumatechnology.com/"
  },
  {
    name: "Acorns Consultancy",
    logo: Acorns,
    url: "https://acornsconsultancy.com"
  },
  {
    name: "Levy Trading Motors",
    logo: Levy,
    url: "https://levytradingmotors.co.uk"
  }
]

const Home = () => {
  return (
    <div className="home_page">
      <div className="home_sec1">
        <div className="row">
          <h1>Unlock the power of Digital transformation with <span>Our IT Services</span></h1>
          <div className="getInTouch">
            <p>Work with our team of experinced <span>Software and Electronic Engineers</span></p>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      <div className="home_sec2">
        <h3>Our Partners</h3>
        {
          partners.map((partner, index) => (
            <div className='home_partner' key={index}>
              <NavLink to={partner.url} target='_blank'><img src={partner.logo} alt={partner.name} /></NavLink>
              <h4>{partner.name}</h4>
            </div>
          ) )
        }
      </div>
      <div className="home_sec3">
        <div className='content'>
          <h3>Why Desc Softlab</h3>
          <p>At Desc Softlab, we believe in the transformative power of technology and its ability to drive growth and success.With a comprehensive range of services, we are committed to delivering tailored solutions that meet the unique needs of our clients.</p>
          <div>
            <p>Our team of experienced professionals works hard to ensure that all our clients are satsified, we always keep in mind:</p>
            <ul>
              <li>Timely delivery</li>
              <li>Customer Satsifaction</li>
              <li>Proactive Problem-solving</li>
              <li>Best Quality products</li>
              <li>Effective Communication</li>
              <li>Confidentiality</li>
            </ul>
            <p>We combine cutting-edge technologies, industry best practices, and creative expertise to deliver exceptional results for our clients.</p>
            <img src={Image1} alt="" />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
