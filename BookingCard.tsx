import React from 'react';
import { Booking } from '../types';
import { MapPin, Calendar } from 'lucide-react';

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
      tabIndex={0}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={booking.img} 
          alt={`${booking.title} photo`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-emerald-800 mb-2">{booking.title}</h2>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1 text-emerald-600" />
          <span className="text-sm">{booking.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar size={16} className="mr-1 text-emerald-600" />
          <span className="text-sm">{booking.dates}</span>
        </div>
        
        <p className="text-gray-700 flex-grow">{booking.description}</p>
        
        <button className="mt-4 bg-emerald-100 text-emerald-800 font-medium py-2 px-4 rounded-lg hover:bg-emerald-200 transition-colors self-start">
          View Details
        </button>
      </div>
    </article>
  );
};

export default BookingCard;
