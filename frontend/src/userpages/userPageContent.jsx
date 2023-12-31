import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserPageContent = () => {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route  path='/about_us' element={<About />} />
        <Route  path='/contact_us' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default UserPageContent;