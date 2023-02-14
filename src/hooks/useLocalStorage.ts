// DEPENDENCIES
import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return { ...JSON.parse(item) };
    } else {
      return { content: { ...initialValue } };
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify({ content: value.content, updatedAt: new Date() }));
  }, [key, value]);

  return [value, (newValue: Object) => setValue(newValue)];
};
