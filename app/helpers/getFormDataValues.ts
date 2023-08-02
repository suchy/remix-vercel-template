export function getFormDataValues(formData: FormData) {
  const result: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    const isArrayField = /[a-zA-z]+\.[0-9]+\.[a-zA-Z]+/g.test(key);

    if (!isArrayField) {
      result[key] = value;
    } else {
      const [fieldName, index, subFieldName] = key.split('.');

      if (!result[fieldName]) {
        result[fieldName] = [];
      }

      if (!result[fieldName][index]) {
        result[fieldName][index] = {};
      }

      result[fieldName][index][subFieldName] = value;
    }
  }

  return result;
}
