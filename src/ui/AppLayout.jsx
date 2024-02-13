import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="flex items-center justify-center bg-stone-800 py-2 text-sm font-semibold uppercase text-stone-200 sm:px-6 md:text-base">
        <Link to="/fast-react-pizza/aboutApp">App Details</Link>
      </div>

      <div className="overflow-scroll">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
