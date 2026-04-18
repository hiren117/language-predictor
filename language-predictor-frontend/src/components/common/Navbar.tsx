import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur border-b">{/* outer bar with blur + border */}
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* brand on the left */}
        <Link className="text-xl font-bold tracking-tight" to="/">📚 BookBazaar</Link>

        {/* simple nav links on the right (hidden on very small screens if you want later) */}
        <nav className="flex items-center gap-6 text-sm">
          < NavLink to="/" className="hover:text-blue-600" end>Home</NavLink>
          < NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
          < NavLink to="/login" className="hover:text-blue-600">Login</NavLink>
        </nav>
      </div>
    </header>
    );
}