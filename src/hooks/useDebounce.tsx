import React from 'react';

export default function useDebounce(value: string, wait?: number): string {
  const [debounce, setDebounce] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value);
    }, wait || 500);

    return () => clearTimeout(timeout);
  }, [value, wait]);

  return debounce;
}
