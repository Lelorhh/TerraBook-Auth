import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginUser, getCurrentUser } from '../utils/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    if (getCurrentUser()) {
      navigate('/dashboard');
    }
  }, [navigate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    const user = loginUser(email.trim().toLowerCase(), password.trim());
    
    if (user) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again or register a new account.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Leaf size={32} className="text-emerald-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-emerald-800 uppercase tracking-wider mb-6">
            TerraBook Login
          </h1>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} noValidate>
            <Input
              label="Email Address"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
            
            <Input
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
              autoComplete="current-password"
            />
            
            <Button type="submit" fullWidth className="mt-2">
              Log In
            </Button>
          </form>
          
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-emerald-700 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
        
        <div className="relative h-48">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Eco-friendly kayaking in South African wilderness"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-bold">Discover Eco-Friendly Adventures</h3>
            <p className="text-sm opacity-90">Book sustainable travel experiences in South Africa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
