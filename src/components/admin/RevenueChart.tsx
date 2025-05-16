
import React from 'react';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

const RevenueChart = () => {
  // This would typically fetch real data from an API
  const chartData = [
    { month: 'Jan', adBudget: 24500, platformFees: 3675 },
    { month: 'Feb', adBudget: 31200, platformFees: 4680 },
    { month: 'Mar', adBudget: 28750, platformFees: 4312.5 },
    { month: 'Apr', adBudget: 35000, platformFees: 5250 },
    { month: 'May', adBudget: 33250, platformFees: 4987.5 },
  ];

  // Chart configuration
  const chartConfig = {
    adBudget: {
      label: "Customer Ad Budgets",
      color: "#9b87f5"
    },
    platformFees: {
      label: "Platform Fees",
      color: "#7E69AB"
    }
  };

  return (
    <ChartContainer config={chartConfig} className="h-80">
      <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis 
          tickFormatter={(value) => `$${value.toLocaleString()}`} 
          width={80}
        />
        <ChartTooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltipContent>
                  {payload.map((p) => (
                    <div key={p.name}>
                      <span>{p.name === "adBudget" ? "Customer Ad Budget" : "Platform Fees"}</span>
                      <span>${Number(p.value).toLocaleString()}</span>
                    </div>
                  ))}
                </ChartTooltipContent>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar dataKey="adBudget" fill="var(--color-adBudget)" name="Customer Ad Budgets" />
        <Bar dataKey="platformFees" fill="var(--color-platformFees)" name="Platform Fees" />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
