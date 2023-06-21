import Home from "./Home";
import {Routes, Route} from 'react-router-dom'; 

const AdminPageContent = () => {
  return (
    <div>
     <Routes>
          <Route index path="/" element={<Home />} />
     </Routes>
    </div>
  )
}

export default AdminPageContent