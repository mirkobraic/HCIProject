import { useState, useEffect } from 'react';
import {myLocalStorage} from '../global/helper'

export const useLocalStorage = (key, defaultValue) => {
  const stored = myLocalStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    myLocalStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}