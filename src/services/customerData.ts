
import { Customer } from "@/types/customer";

// This would typically fetch from an API
export const getCustomerData = (): Customer[] => {
  return [
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
};

export const getActiveCustomers = (): Customer[] => {
  return getCustomerData().filter(customer => customer.status === "active");
};

export const getLostCustomers = (): Customer[] => {
  return getCustomerData().filter(customer => customer.status === "lost");
};
