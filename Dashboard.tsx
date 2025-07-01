import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Leaf } from 'lucide-react';
import Header from '../components/Header';
import BookingCard from '../components/BookingCard';
import { mockBookings } from '../data/bookings';
import { getCurrentUser } from '../utils/auth';
import { Booking } from '../types';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(getCurrentUser());
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredBookings = bookings.filter(booking => 
    booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!user) return null;
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header userName={user.name} showLogout={true} />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-4 md:mb-0">
            Your Eco Adventures
          </h1>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full sm:w-64"
              />
            </div>
            
            <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Filter size={18} className="mr-2 text-emerald-600" />
              <span>Filter</span>
            </button>
          </div>
        </div>
        
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={48} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No bookings found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any eco-adventures matching your search criteria.
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Bookings
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Upcoming Eco Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                June 5, 2025
              </span>
              <h3 className="font-bold text-gray-800">World Environment Day Cleanup</h3>
              <p className="text-gray-600 text-sm mt-1">Join our community beach cleanup event in Cape Town</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                July 18, 2025
              </span>
              <h3 className="font-bold text-gray-800">Sustainable Tourism Workshop</h3>
              <p className="text-gray-600 text-sm mt-1">Learn about eco-friendly travel practices and conservation</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf size={20} className="mr-2" />
              <span className="font-bold">TerraBook</span>
            </div>
            <div className="text-sm text-emerald-100">
              &copy; {new Date().getFullYear()} TerraBook. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
