
export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  joinDate: string;
  status: "active" | "lost";
  lastPurchase?: string;
  totalSpent: number;
}
