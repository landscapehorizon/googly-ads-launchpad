
import React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const CustomerCampaignStatus = () => {
  // This would typically fetch real data from an API
  const data = [
    { name: 'Active Campaigns', value: 9, color: '#8B5CF6' },
    { name: 'Lost Customers', value: 3, color: '#F97316' }
  ];

  // Chart configuration
  const chartConfig = {
    active: {
      label: "Active Campaigns",
      color: "#8B5CF6"
    },
    lost: {
      label: "Lost Customers",
      color: "#F97316" 
    }
  };

  return (
    <ChartContainer config={chartConfig} className="h-64">
      <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ChartContainer>
  );
};

export default CustomerCampaignStatus;
