import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';
import {
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Download,
  Star,
  StarOff
} from 'lucide-react';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'striped', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const invoices = [
  {
    id: 'INV001',
    customer: 'John Doe',
    email: 'john@example.com',
    status: 'paid',
    amount: '$250.00',
    date: '2024-01-15',
  },
  {
    id: 'INV002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    status: 'pending',
    amount: '$150.00',
    date: '2024-01-16',
  },
  {
    id: 'INV003',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'unpaid',
    amount: '$350.00',
    date: '2024-01-17',
  },
  {
    id: 'INV004',
    customer: 'Alice Brown',
    email: 'alice@example.com',
    status: 'paid',
    amount: '$450.00',
    date: '2024-01-18',
  },
];

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    lastLogin: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c4a0?w=40&h=40&fit=crop&crop=face',
    lastLogin: '2024-01-14',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'User',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    lastLogin: '2024-01-10',
  },
];

// Basic Table
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered</h3>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Striped</h3>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody variant="striped">
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

// Table with different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead size="sm">Name</TableHead>
              <TableHead size="sm">Email</TableHead>
              <TableHead size="sm">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="sm">John Doe</TableCell>
              <TableCell size="sm">john@example.com</TableCell>
              <TableCell size="sm">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead size="md">Name</TableHead>
              <TableHead size="md">Email</TableHead>
              <TableHead size="md">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="md">John Doe</TableCell>
              <TableCell size="md">john@example.com</TableCell>
              <TableCell size="md">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead size="lg">Name</TableHead>
              <TableHead size="lg">Email</TableHead>
              <TableHead size="lg">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="lg">John Doe</TableCell>
              <TableCell size="lg">john@example.com</TableCell>
              <TableCell size="lg">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

// Sortable Table
export const SortableTable: Story = {
  render: () => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    return (
      <Table>
        <TableCaption>Sortable invoice table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={sortField === 'id' ? sortDirection : null}
              onSort={() => handleSort('id')}
            >
              Invoice
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortField === 'customer' ? sortDirection : null}
              onSort={() => handleSort('customer')}
            >
              Customer
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortField === 'status' ? sortDirection : null}
              onSort={() => handleSort('status')}
            >
              Status
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortField === 'amount' ? sortDirection : null}
              onSort={() => handleSort('amount')}
              className="text-right"
            >
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === 'paid' ? 'default' :
                      invoice.status === 'pending' ? 'secondary' : 'destructive'
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Data Table with Actions
export const DataTable: Story = {
  render: () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (userId: number) => {
      setFavorites(prev =>
        prev.includes(userId)
          ? prev.filter(id => id !== userId)
          : [...prev, userId]
      );
    };

    return (
      <Table>
        <TableCaption>User management table with actions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody variant="hoverable">
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <button onClick={() => toggleFavorite(user.id)}>
                  {favorites.includes(user.id) ? (
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar/>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{user.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={user.status === 'active' ? 'default' : 'secondary'}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="secondary" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Table with Footer
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Sales report for Q1 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead className="text-right">Sales</TableHead>
          <TableHead className="text-right">Profit</TableHead>
          <TableHead className="text-right">Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">January</TableCell>
          <TableCell className="text-right">$12,500</TableCell>
          <TableCell className="text-right">$2,100</TableCell>
          <TableCell className="text-right">+12%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">February</TableCell>
          <TableCell className="text-right">$15,200</TableCell>
          <TableCell className="text-right">$3,200</TableCell>
          <TableCell className="text-right">+21%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">March</TableCell>
          <TableCell className="text-right">$18,900</TableCell>
          <TableCell className="text-right">$4,100</TableCell>
          <TableCell className="text-right">+24%</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="font-medium">Total</TableCell>
          <TableCell className="text-right font-medium">$46,600</TableCell>
          <TableCell className="text-right font-medium">$9,400</TableCell>
          <TableCell className="text-right font-medium">+19%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Responsive Table
export const ResponsiveTable: Story = {
  render: () => (
    <div className="w-full">
      <Table>
        <TableCaption>Responsive table that scrolls on smaller screens</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Order ID</TableHead>
            <TableHead className="min-w-[150px]">Customer</TableHead>
            <TableHead className="min-w-[120px]">Email</TableHead>
            <TableHead className="min-w-[100px]">Status</TableHead>
            <TableHead className="min-w-[100px]">Date</TableHead>
            <TableHead className="min-w-[100px] text-right">Amount</TableHead>
            <TableHead className="min-w-[120px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === 'paid' ? 'default' :
                      invoice.status === 'pending' ? 'secondary' : 'destructive'
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="secondary" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

// Empty State Table
export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-24 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-gray-400">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">No data available</p>
              <Button variant="secondary" size="sm">
                Add New Item
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};