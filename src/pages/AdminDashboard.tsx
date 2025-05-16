
import React from 'react';
import AdminStats from '@/components/admin/AdminStats';
import RevenueChart from '@/components/admin/RevenueChart';
import CustomerCampaignStatus from '@/components/admin/CustomerCampaignStatus';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Track platform revenues and customer campaigns</p>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card className="col-span-full md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Platform fees vs customer ad budgets (Year-to-Date)</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Customer Campaigns</CardTitle>
            <CardDescription>Active vs Lost Customers</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomerCampaignStatus />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly" className="mt-6">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Breakdown</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly Breakdown</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Breakdown</CardTitle>
              <CardDescription>Detailed view of platform fees and customer ad budgets by month</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueDetailsTable view="monthly" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quarterly">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Revenue Breakdown</CardTitle>
              <CardDescription>Aggregated view by quarter for tax reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueDetailsTable view="quarterly" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;

const RevenueDetailsTable = ({ view }: { view: "monthly" | "quarterly" }) => {
  // This would normally fetch real data from an API
  const data = React.useMemo(() => {
    if (view === "monthly") {
      return [
        { period: "Jan 2025", adBudget: 24500, platformFees: 3675, customers: 7 },
        { period: "Feb 2025", adBudget: 31200, platformFees: 4680, customers: 9 },
        { period: "Mar 2025", adBudget: 28750, platformFees: 4312.5, customers: 8 },
        { period: "Apr 2025", adBudget: 35000, platformFees: 5250, customers: 10 },
        { period: "May 2025", adBudget: 33250, platformFees: 4987.5, customers: 9 },
      ];
    } else {
      return [
        { period: "Q1 2025", adBudget: 84450, platformFees: 12667.5, customers: 8 },
        { period: "Q2 2025", adBudget: 68250, platformFees: 10237.5, customers: 9.5 },
      ];
    }
  }, [view]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">{view === "monthly" ? "Month" : "Quarter"}</th>
            <th className="text-right p-3">Customer Ad Budget</th>
            <th className="text-right p-3">Platform Fees</th>
            <th className="text-right p-3">Avg. Customers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">{row.period}</td>
              <td className="text-right p-3">${row.adBudget.toLocaleString()}</td>
              <td className="text-right p-3">${row.platformFees.toLocaleString()}</td>
              <td className="text-right p-3">{row.customers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
