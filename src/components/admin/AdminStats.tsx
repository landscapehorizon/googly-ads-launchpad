
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, UserMinus, ChartBarIcon } from 'lucide-react';

const AdminStats = () => {
  // This would typically fetch real data from an API
  const stats = [
    {
      title: "YTD Platform Fees",
      value: "$22,905",
      change: "+12.5%",
      trend: "increase",
      icon: <DollarSign className="h-5 w-5" />,
      description: "vs. previous year"
    },
    {
      title: "YTD Ad Budget",
      value: "$152,700",
      change: "+8.2%",
      trend: "increase",
      icon: <ChartBarIcon className="h-5 w-5" />,
      description: "vs. previous year"
    },
    {
      title: "Active Customers",
      value: "9",
      change: "+2",
      trend: "increase",
      icon: <Users className="h-5 w-5" />,
      description: "vs. last quarter"
    },
    {
      title: "Lost Customers",
      value: "3",
      change: "-1",
      trend: "decrease",
      icon: <UserMinus className="h-5 w-5" />,
      description: "vs. last quarter"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="flex items-center p-6">
            <div className="bg-primary/10 p-2 rounded-full mr-4">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className={`text-xs font-medium ${stat.trend === "increase" ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminStats;
