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
];

const HomePage = () => {
  return (
    <div>
      <section className="relative h-[560px]">
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/febe5e47-667c-41e5-930e-117d7e0f3791/hero-gateau-delices-3n6s2ub-1762522350817.webp' alt="Hero Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Gâteaux d'Exception, Moments de Bonheur</h1>
          <p className="text-xl max-w-2xl">Découvrez nos créations artisanales, confectionnées avec amour et les meilleurs ingrédients.</p>
        </div>
      </section>
      <section className="py-12 bg-pink-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-800">Nos Gourmandises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;