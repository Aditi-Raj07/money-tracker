import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import '../../index.css'; // Ensure this path is correct


const Input = ({ value, onChange, label, placeholder, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className='text-[13px] text-slate-800 block mb-1'>{label}</label>
      <div className='input-box'>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none'
          value={value}
          onChange={onChange}
        />

        {type === 'password' && (
          showPassword ? (
            <FaRegEyeSlash 
              size={18}
              className='text-primary cursor-pointer'
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEye 
              size={18}
              className='text-slate-50 cursor-pointer'
              onClick={toggleShowPassword} 
            />
          )
        )}
      </div>
    </div>
  );
};

export default Input;