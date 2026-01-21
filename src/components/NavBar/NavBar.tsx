import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen]= useState(false);   
  return (
    <nav className="bg-primary-green p-4 text-white">
    <div className="flex justify-between items-center">
      <Link to="/">JM Gestión</Link>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">☰</button> {/* Hamburguesa */}
      <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}> {/* Toggle */}
        <Link to="/lotes">Lotes</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  </nav>
  );
};

export default NavBar