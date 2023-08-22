import type { ReactNode } from 'react';
import { FieldError } from './FieldError';
import { Label } from '../ui/label';

export interface FieldProps {
  children: ReactNode;
  className?: string;
  description?: string;
  error?: {
    _errors: string[];
  };
  label: string;
  name: string;
}

export function Field({
  children,
  className = '',
  description,
  error,
  label,
  name
}: FieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={`field-${name}`} className="block mb-2">
        {label}
      </Label>

      {description && (
        <p className="text-sm text-slate-600 mb-2">{description}</p>
      )}

      <FieldError error={error} />

      {children}
    </div>
  );
}
