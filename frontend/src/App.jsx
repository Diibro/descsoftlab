import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserPageContent from './userpages/userPageContent';
import AdminPageContent from './adminDashboard/AdminPageContent';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/*' element={<UserPageContent />} />
          <Route path='/admin/*' element={<AdminPageContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
