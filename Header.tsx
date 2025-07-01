import React from 'react';
import { Leaf, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';

interface HeaderProps {
  userName?: string;
  showLogout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ userName, showLogout = false }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };
  
  return (
    <header className="bg-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="mr-2" size={24} />
          <span className="font-bold text-xl tracking-wider uppercase">TerraBook</span>
        </div>
        
        <div className="flex items-center">
          {userName && (
            <span className="mr-4 hidden sm:inline-block">Welcome, {userName}</span>
          )}
          
          {showLogout && (
            <button 
              onClick={handleLogout}
              className="flex items-center bg-emerald-800 hover:bg-emerald-900 text-white py-2 px-4 rounded-lg transition-colors"
              aria-label="Logout"
            >
              <LogOut size={18} className="mr-1" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
