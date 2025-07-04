import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper.js'; // Adjust the import path as necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if(!password) {
      setError('Please enter your password');
      return;
    }
    setError(null);
    // Proceed with login
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center px-6">
        <h3 className='text-2xl font-semibold text-black mb-2'>Welcome Back</h3>
        <p className='text-sm text-slate-600 mb-6'>
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              value={email}
              onChange={({target}) => setEmail(target.value)}
              placeholder="john@example.com"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              value={password}
              onChange={({target}) => setPassword(target.value)}
              placeholder="Min 8 characters"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            
          </div>
          
          {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
          
          <button
            type="submit"
            className="btn-primary"
          >
            LOGIN
          </button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link 
              to="/signUp" 
              className="text-primary font-medium text-fuchsia-800"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;