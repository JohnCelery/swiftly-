import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Homepage" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cranky-Moon logo" width={120} height={40} />
        </Link>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        <ul
          className={`${
            open ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow lg:shadow-none`}
          aria-label="Main navigation"
        >
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block px-4 py-2 hover:text-blue-600">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block px-4 py-2 hover:text-blue-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/wishlist" aria-label="Wishlist" className="hover:text-blue-600">
            <FiHeart className="w-6 h-6" />
          </Link>
          <Link href="/cart" aria-label="Shopping cart" className="relative hover:text-blue-600">
            <FiShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </Link>
          <Link href="/login" aria-label="Login" className="hover:text-blue-600">
            <FiUser className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
