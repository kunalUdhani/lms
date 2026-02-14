import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const location = useLocation();
  const isCourseListPage = location.pathname.startsWith('/course-list');

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between
      px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b
      ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70 backdrop-blur'}
      `}
    >
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-5 text-gray-600">
        {user && (
          <>
            <button onClick={() => navigate('/educator')}>
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            |
            <Link to="/my-enrollments">My Enrollments</Link>
          </>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3 text-gray-600">
        {user && (
          <>
            <button onClick={() => navigate('/educator')}>
              {isEducator ? 'Educator' : 'Become Educator'}
            </button>
            |
            <Link to="/my-enrollments">Enrollments</Link>
          </>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn}>
            <img src={assets.user_icon} alt="user" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
