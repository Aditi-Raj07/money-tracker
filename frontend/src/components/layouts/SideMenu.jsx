import React from 'react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const SideMenu = ({ activeMenu }) => {
  const { user } = useContext(UserContext)
  const location = useLocation()

  // Menu items configuration
  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ]

  return (
    <div className="w-64 h-full fixed bg-white shadow-sm border-r border-gray-200">
      <div className="p-4 h-full flex flex-col">
        {/* Logo/Branding */}
        <div className="mb-8 px-2 py-4">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            YourBrand
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path || activeMenu === item.name.toLowerCase()
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        {user && (
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <span className="text-indigo-600 font-medium">
                  {user.name?.charAt(0) || user.email?.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user.name || user.email}
                </p>
                <p className="text-xs text-gray-500">
                  {user.role || 'User'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SideMenu