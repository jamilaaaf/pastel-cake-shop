import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Délice Chocolat-Fraise',
    price: '35,00 €',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/febe5e47-667c-41e5-930e-117d7e0f3791/chocolat-fraise-delice-spd55dz-1762522358097.webp',
  },
  {
    name: 'Rêve Vanille-Framboise',
    price: '30,00 €',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/febe5e47-667c-41e5-930e-117d7e0f3791/vanille-framboise-reve-l51zrh5-1762522365406.webp',
  },
  {
    name: 'Soleil Citron-Meringue',
    price: '28,00 €',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/febe5e47-667c-41e5-930e-117d7e0f3791/citron-meringue-soleil-fyo2i3p-1762522373052.webp',
  },
  {
    name: 'Trésor Caramel Beurre Salé',
    price: '32,00 €',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/febe5e47-667c-41e5-930e-117d7e0f3791/caramel-beurre-sale-tresor-mnektt6-1762522379679.webp',
  },
  // Add more products as needed
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-800">Tous Nos Gâteaux</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
         {products.map((product, index) => (
          <ProductCard key={index+4} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;