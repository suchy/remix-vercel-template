import type { FieldProps } from './Field';
import { Field } from './Field';
import { Textarea } from '../ui/textarea';

type TextareaFieldProps = Omit<FieldProps, 'children'> & {
  value?: string;
};

export function TextareaField({
  className,
  description,
  error,
  label,
  name,
  value
}: TextareaFieldProps) {
  return (
    <Field
      className={className}
      description={description}
      error={error}
      label={label}
      name={name}
    >
      <Textarea
        id={`field-${name}`}
        name={name}
        defaultValue={value}
        className="w-1/2"
      />
    </Field>
  );
}
