import type { FieldProps } from './Field';
import { Field } from './Field';
import { Input } from '../ui/input';

type NumberFieldProps = Omit<FieldProps, 'children'> & {
  value?: string;
  min?: number;
  max?: number;
};

export function NumberField({
  className,
  description,
  error,
  label,
  name,
  value,
  min,
  max
}: NumberFieldProps) {
  return (
    <Field
      className={className}
      description={description}
      error={error}
      label={label}
      name={name}
    >
      <Input
        type="number"
        id={`field-${name}`}
        name={name}
        defaultValue={value}
        min={min}
        max={max}
        className="w-1/2"
      />
    </Field>
  );
}
