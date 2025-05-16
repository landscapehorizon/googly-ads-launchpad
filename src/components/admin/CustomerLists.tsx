
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  joinDate: string;
  status: "active" | "lost";
  lastPurchase?: string;
  totalSpent: number;
}

const CustomerLists: React.FC = () => {
  // This would typically fetch from an API
  const customers: Customer[] = [
    {
      id: "cust_001",
      name: "Alex Johnson",
      email: "alex@techinnovate.com",
      company: "Tech Innovate",
      joinDate: "2024-01-15",
      status: "active",
      lastPurchase: "2025-04-28",
      totalSpent: 12500
    },
    {
      id: "cust_002",
      name: "Sarah Williams",
      email: "sarah@digitalfirst.com",
      company: "Digital First",
      joinDate: "2024-02-03",
      status: "active",
      lastPurchase: "2025-05-01",
      totalSpent: 9800
    },
    {
      id: "cust_003",
      name: "Michael Chen",
      email: "michael@growthspark.com",
      company: "Growth Spark",
      joinDate: "2023-11-22",
      status: "active",
      lastPurchase: "2025-04-15",
      totalSpent: 15200
    },
    {
      id: "cust_004",
      name: "Lisa Rodriguez",
      email: "lisa@modernretail.com",
      company: "Modern Retail",
      joinDate: "2023-08-14",
      status: "lost",
      lastPurchase: "2024-12-10",
      totalSpent: 7500
    },
    {
      id: "cust_005",
      name: "David Thompson",
      email: "david@quickserve.com",
      company: "QuickServe",
      joinDate: "2023-10-05",
      status: "lost",
      lastPurchase: "2025-01-20",
      totalSpent: 5400
    },
    {
      id: "cust_006",
      name: "Emma Wilson",
      email: "emma@cloudcomm.com",
      company: "CloudComm",
      joinDate: "2023-09-18",
      status: "lost",
      lastPurchase: "2024-11-30",
      totalSpent: 6200
    }
  ];

  const activeCustomers = customers.filter(customer => customer.status === "active");
  const lostCustomers = customers.filter(customer => customer.status === "lost");

  const downloadCSV = (customerList: Customer[], filename: string) => {
    const headers = ["ID", "Name", "Email", "Company", "Join Date", "Last Purchase", "Total Spent"];
    const csvRows = [
      headers.join(','),
      ...customerList.map(customer => [
        customer.id,
        customer.name,
        customer.email,
        customer.company,
        customer.joinDate,
        customer.lastPurchase || "N/A",
        `$${customer.totalSpent.toLocaleString()}`
      ].join(','))
    ];
    
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Active Customers Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Active Customers ({activeCustomers.length})</CardTitle>
            <CardDescription>Customers currently using our platform</CardDescription>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => downloadCSV(activeCustomers, "active-customers")}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </CardHeader>
        <CardContent>
          <div className="max-h-[400px] overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Spent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.company}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell className="text-right">${customer.totalSpent.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Lost Customers Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Lost Customers ({lostCustomers.length})</CardTitle>
            <CardDescription>Former customers who have cancelled</CardDescription>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => downloadCSV(lostCustomers, "lost-customers")}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </CardHeader>
        <CardContent>
          <div className="max-h-[400px] overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Last Active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lostCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.company}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell className="text-right">{new Date(customer.lastPurchase || "").toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerLists;
