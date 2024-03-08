import {
  BrowserRouter,
  Routes,
  Route
  } from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Services from './pages/Services';
  import Service from './pages/Service';
  import Products from './pages/Products';
  import Product from './pages/Product';
  import Footer from './components/Footer';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
  
  
  export default function Routing() {
    return (
      <>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/apropos' Component={About} />
            <Route path='/produits' Component={Products} />
            <Route path='/product/:id' Component={Product} /> 
            <Route path='/services' Component={Services} />
            <Route path='/service/:id' Component={Service} />
            <Route path='/contacts' Component={Contact} />
            {/* <Route path='/blog/:id' Component={Blog} /> */}
            <Route path='/menu' Component={Menu} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  