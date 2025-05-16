
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
import { Customer } from "@/types/customer";

interface CustomerTableProps {
  customers: Customer[];
  title: string;
  description: string;
  downloadFilename: string;
}

const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  title,
  description,
  downloadFilename,
}) => {
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

  const isActive = title.toLowerCase().includes('active');

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">{title} ({customers.length})</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => downloadCSV(customers, downloadFilename)}
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
                <TableHead className="text-right">
                  {isActive ? "Spent" : "Last Active"}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell className="text-right">
                    {isActive 
                      ? `$${customer.totalSpent.toLocaleString()}`
                      : new Date(customer.lastPurchase || "").toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerTable;
