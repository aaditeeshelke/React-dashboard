import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import CustomerDetail from './components/CustomerDetail' // Import the CustomerDetail component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import BrowserRouter and Routes
import ProductDetail from './components/ProductDetail'
import Charts from './components/Charts'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router> {/* Wrap everything with Router */}
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/" element={<Home />} /> {/* Define the route for the Home component */}
          <Route path="/customer" element={<CustomerDetail />} />
          <Route path="/Product" element={<ProductDetail />} /> 
          <Route path="/Charts" element={<Charts />} />{/* Define the route for the CustomerDetail component */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
