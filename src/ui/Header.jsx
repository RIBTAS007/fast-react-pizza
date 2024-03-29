import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header
      className=" border-b-300 font-pizza flex items-center 
    justify-around border border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/fast-react-pizza/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
