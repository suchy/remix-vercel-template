interface FieldErrorProps {
  error?: {
    _errors: string[];
  };
}

export function FieldError({ error }: FieldErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <div className="text-red-500 text-sm mb-2">{error._errors.join('. ')}</div>
  );
}
