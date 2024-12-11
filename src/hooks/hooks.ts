import { useEffect, useState } from "react";
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Очистка таймера при изменении значения или размонтировании
    };
  }, [value, delay]);

  return debouncedValue;
};