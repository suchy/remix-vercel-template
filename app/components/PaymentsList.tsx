import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '~/components/ui/table';

interface PaymentsListProps {
  className?: string;
  payments: {
    amount: number;
    currency: 'USD';
    id: number;
    is_one_off_charge: boolean;
    is_paid: 0 | 1;
    payout_date: string;
    receipt_url?: string;
    subscription_id: number;
  }[];
}

export function PaymentsList({ className = '', payments }: PaymentsListProps) {
  return (
    <div className={className}>
      <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">
        Payments history
      </h3>

      <p className="text-sm text-slate-600 mb-6">
        A list of your recent payements.
      </p>

      {!payments.length && (
        <p className="text-sm text-slate-600">You have no payments yet.</p>
      )}

      {!!payments.length && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Invoice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  {format(new Date(payment.payout_date), 'dd MMMM yyyy')}
                </TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>
                  {payment.receipt_url && (
                    <a
                      href={payment.receipt_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Invoice
                    </a>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
