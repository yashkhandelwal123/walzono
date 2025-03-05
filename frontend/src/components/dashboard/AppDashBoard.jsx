import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import OrderHistory from './OrderHistory';
import PaymentHistory from './PaymentHistory';
import ServiceManagement from './ServiceManagement';

function AppDashBoard() {
  const [activeTab, setActiveTab] = useState('dashboard');

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