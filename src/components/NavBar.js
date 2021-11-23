import React from 'react';
import './style.css';


function NavBar() {
  return (
    <div className="App">
        <nav className="navBar">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Stock</a></li>
            <li><a href="#">Pedidos</a></li>
            <li><a href="#">Carrito</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;