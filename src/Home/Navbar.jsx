
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/login");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
useEffect(() => {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  if (token && userData?.role) {
    if (userData.role === "admin") {
      setRedirectPath("/admin-dashboard");
    } else if (userData.role === "user") {
      setRedirectPath("/profilepage");
    }
  } else {
    setRedirectPath("/login");
  }
}, []);
  return (
    <nav className="bg-white shadow-md">
      <div className="px-5 p-3">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0 flex items-center">
             <Link to="/">
            <img  src="https://i.ibb.co/KxM9x9Vd/png-clipart-electricity-electric-power-logo-electrical-engineering-energy-saving-and-environmental-p.png"
              alt="logo"   className="h-10 w-auto"/> </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-dark fw-bold">Home</Link>
            <Link to="/electricalproducts" className="text-dark fw-bold">Products</Link>
            <Link to="/contactus" className="text-dark fw-bold">ContactUs</Link>
            <input  type="text"  placeholder="Search..."  className="px-3 py-1 border rounded focus:outline-none focus:ring" />
            <Link to="/shoppingcart" className="text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>

           <Link to={redirectPath} className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
</Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}   className="text-gray-700 hover:text-gray-900 focus:outline-none" >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                {isMenuOpen ? (
                  <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path  strokeLinecap="round"   strokeLinejoin="round"  strokeWidth={2}  d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-4 sm:px-3 bg-gray-50">

          {/* Search Bar in Mobile */}
          <input  type="text"  placeholder="Search..."
            className="px-3 py-1 border rounded w-full max-w-xs focus:outline-none focus:ring" />
          <Link to="/" className="text-lg text-dark hover:bg-gray-100 px-4 py-2 rounded w-100 text-center">Home</Link>
          <Link to="/electricalproducts" className="text-lg text-dark hover:bg-gray-100 px-4 py-2 rounded w-100 text-center">Products</Link>
          <Link to="/contactus" className="text-lg text-dark hover:bg-gray-100 px-4 py-2 rounded w-100 text-center">ContactUs</Link>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/productpage" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link to="/profilepage" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
