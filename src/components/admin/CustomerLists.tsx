
import React from 'react';
import CustomerTable from './CustomerTable';
import { getActiveCustomers, getLostCustomers } from '@/services/customerData';

const CustomerLists: React.FC = () => {
  const activeCustomers = getActiveCustomers();
  const lostCustomers = getLostCustomers();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Active Customers Table */}
      <CustomerTable
        customers={activeCustomers}
        title="Active Customers"
        description="Customers currently using our platform"
        downloadFilename="active-customers"
      />

      {/* Lost Customers Table */}
      <CustomerTable
        customers={lostCustomers}
        title="Lost Customers"
        description="Former customers who have cancelled"
        downloadFilename="lost-customers"
      />
    </div>
  );
};

export default CustomerLists;
