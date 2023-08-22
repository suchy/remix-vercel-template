import type { FieldProps } from './Field';
import { Field } from './Field';
import { Input } from '../ui/input';

type TextFieldProps = Omit<FieldProps, 'children'> & {
  value?: string;
};

export function TextField({
  className,
  description,
  error,
  label,
  name,
  value
}: TextFieldProps) {
  return (
    <Field
      className={className}
      description={description}
      error={error}
      label={label}
      name={name}
    >
      <Input
        type="text"
        id={`field-${name}`}
        name={name}
        defaultValue={value}
        className="w-1/2"
      />
    </Field>
  );
}
