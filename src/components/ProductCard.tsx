const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-pink-800">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">Commander</button>
      </div>
    </div>
  );
};

export default ProductCard;