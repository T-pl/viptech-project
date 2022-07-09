import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Addproduct } from '../pages/AddProduct/Addproduct';
import { Carrinho } from '../pages/Carrinho/Carrinho';
import { Editpage } from '../pages/EditProduct/Editpage';

import { Home } from "../pages/Home/Home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path='/addproduct' element={<Addproduct />} />
      </Routes>
      <Routes>
        <Route exact path='/carrinho' element={<Carrinho />} />
      </Routes>
      <Routes>
        <Route exact path='/editar' element={<Editpage />} />
      </Routes>
    </Router>
  );
}