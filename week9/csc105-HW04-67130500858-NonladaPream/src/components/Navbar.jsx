import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-600">
      <div className="flex space-x-8">
        <Link to ="/" className="text-white font-bold hover:text-gray-800">Home</Link>
        <Link to ="/login" className="text-white font-bold hover:text-gray-800">Login</Link>
        <Link to="/fav" className="text-white font-bold hover:text-gray-800">Favorites</Link>
      </div>

    </nav>
  );
};

export default Navbar;
