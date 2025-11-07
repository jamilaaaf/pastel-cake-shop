import { Link } from 'react-router-dom';
import { CakeSlice } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-pink-800" style={{ fontFamily: 'Playfair Display, serif' }}>
          <CakeSlice className="h-8 w-8 text-pink-500" />
          <span>Gâteau Délices</span>
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Accueil</Link>
          <Link to="/products" className="text-gray-600 hover:text-pink-500 transition-colors">Produits</Link>
          <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">À propos</Link>
          <Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;