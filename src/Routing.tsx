import {
  BrowserRouter,
  Routes,
  Route
  } from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Blogs from './pages/Blogs';
  import Service from './pages/Service';
  import Blog from './pages/Blog';
  import Product from './pages/Product';
  import Footer from './components/Footer';
import Menu from './pages/Menu';
  
  
  export default function Routing() {
    return (
      <>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/apropos' Component={About} />
            <Route path='/services-produits' Component={Service} />
            {/* <Route path='/blogs' Component={Blogs} /> */}
            {/* <Route path='/blog/:id' Component={Blog} /> */}
            <Route path='/product/:id' Component={Product} /> 
            <Route path='/menu' Component={Menu} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  