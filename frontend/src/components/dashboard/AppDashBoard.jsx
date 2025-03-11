import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import OrderHistory from './OrderHistory';
import PaymentHistory from './PaymentHistory';
import ServiceManagement from './ServiceManagement';
import { useSelector } from 'react-redux';
import OTPLogin from '../partners_component/OTPLogin';
import {useNavigate} from 'react-router-dom';
import Profile from './Profile';


function AppDashBoard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const partner  = useSelector((store) => store.partner?.partnerInfo);
  const navigate = useNavigate();

  console.log(partner);

  // console.log(partner);
  useEffect(() => {
    if (!partner) {
      navigate('/partner/login');

    }
  }, []);
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <OrderHistory />;
      case 'payments':
        return <PaymentHistory />;
      case 'services':
        return <ServiceManagement />;
      case 'profile':
          return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default AppDashBoard;