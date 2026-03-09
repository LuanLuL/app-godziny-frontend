export const isBoolean = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'boolean') {
    return true;
  }

  if (typeof value === 'object' && typeof (value as {toString?: unknown}).toString === 'function') {
    const strValue = (value as {toString: () => string}).toString();
    return strValue === 'true' || strValue === 'false';
  }

  return false;
};

export const getTypeOf = (obj: unknown): string => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

export const hasValue = (value: unknown) => {
  if (isBoolean(value)) {
    return true;
  }

  const type = getTypeOf(value);

  switch (type) {
    case 'undefined':
    case 'null':
      return false;
    case 'number':
      return typeof value === 'number' && !isNaN(value);
    case 'object':
      return typeof value === 'object' && value !== null && Object.keys(value).length > 0;
    case 'array':
      return Array.isArray(value) && value.length > 0;
    case 'string':
      return typeof value === 'string' && value.trim() !== '';
    default:
      return true;
  }
};
