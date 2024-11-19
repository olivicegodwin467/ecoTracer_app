import { Link, useNavigate } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow">
    <div
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <FaLeaf size={24} />
        <h1 className="text-xl font-bold">EcoTracker App</h1>
      </div>
    <div className="flex space-x-4">
      <Link to="/tracker" className="hover:underline">Tracker</Link>
      <Link to="/analytics" className="hover:underline">Analytics</Link>
      <Link to="/login" className="bg-green-700 px-4 py-2 rounded hover:bg-green-800">Login</Link>
    </div>
  </nav>
    )
}

export default Navbar;
