//nav
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white">
      <h1 className="text-2xl font-bold">NonladaP</h1>
      <div className="flex space-x-8">
        <a href="#" className="text-gray-800 font-bold hover:text-gray-600">Home</a>
        <a href="#" className="text-gray-800 font-bold hover:text-gray-600">About me</a>
        <a href="#" className="text-gray-800 font-bold hover:text-gray-600">Gallery</a>
      </div>

      <button className="px-6 py-2 bg-green-800 font-bold text-white rounded-full hover:bg-green-700 transition-colors">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
