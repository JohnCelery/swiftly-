import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p className="text-sm">&copy; 2025 Cranky Moon</p>
      <div className="flex items-center space-x-4">
        <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 11-5 5 5 5 0 015-5zm0 1.5a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 8.5zm5.5-2.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0117.5 6z" />
          </svg>
        </a>
        <nav className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
