import type { SafeParseReturnType } from 'zod';

export function getValidationErrors(
  zodResult: SafeParseReturnType<unknown, unknown>
) {
  if (zodResult.success) {
    return;
  }

  const zodFormattedErrors = zodResult.error.format();

  const zodFormattedErrorsEntries = Object.entries(zodFormattedErrors);

  const errorsEntries = zodFormattedErrorsEntries
    .filter(([fieldName]) => fieldName !== '_errors')
    .map(([fieldName, fieldErrors]) => {
      if (Array.isArray(fieldErrors)) {
        return [fieldName, fieldErrors];
      }

      // @ts-ignore
      return [fieldName, fieldErrors._errors];
    });

  const errors: Record<string, string> = Object.fromEntries(errorsEntries);

  return errors;
}
