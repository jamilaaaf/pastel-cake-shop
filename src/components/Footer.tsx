import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto text-center text-gray-600">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-pink-500 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><Twitter size={24} /></a>
        </div>
        <p className="text-sm">&copy; {currentYear} Gâteau Délices. Tous droits réservés.</p>
        <p className="text-xs mt-2">Conçu avec passion en Afrique</p>
      </div>
    </footer>
  );
};

export default Footer;