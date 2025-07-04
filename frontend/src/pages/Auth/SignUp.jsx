import React, { useState } from 'react';
import Input from '../../components/Inputs/Input';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // Reset errors

    // Validation (unchanged)
    if (!fullName) {
      setError('Please enter your full name');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      // Simulate successful signup (replace with actual API call)
      console.log('Signup data:', { fullName, email, password, profilePic });
      
      // FOR TESTING: Force navigation after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/login'); // This line must execute
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
  };

  // RETURN SECTION (COMPLETELY UNCHANGED FROM YOUR ORIGINAL)
  return (
    <AuthLayout>
      <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm'>
        <h1 className='text-2xl font-bold text-center mb-1 text-violet-700'>Create Account </h1>
        <p className='text-center text-gray-600 mb-6'>Join us today by entering your details below</p>

        <div className='border-t border-gray-200 pt-6'>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className='text-center mb-6'>
              <h3 className='text-sm font-medium text-gray-700 mb-2'>Upload</h3>
              <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <div>
              <p className='text-sm font-medium text-gray-700 mb-1'>Please enter your full name</p>
              <Input
                value={fullName}
                onChange={({target}) => setFullName(target.value)}
                label="Full Name"
                placeholder="John Doe"
                type="text"
                required
              />
            </div>

            <Input
              value={email}
              onChange={({target}) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="email"
              required
            />

            <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 characters"
              type="password"
              required
            />

            <button
              type="submit"
              className="w-full bg-violet-800 text-white py-2.5 rounded-md mt-4 hover:bg-violet-500 transition-colors font-medium cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-violet-600 font-medium hover:underline underline" >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;