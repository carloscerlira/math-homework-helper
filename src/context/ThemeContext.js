import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIGHT_COLORS, DARK_COLORS } from '../theme/colors';

const ThemeContext = createContext(null);
const STORAGE_KEY = '@mathhelper_dark_mode';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(val => { if (val === 'true') setIsDark(true); })
      .catch(() => {});
  }, []);

  const toggleDark = () => {
    setIsDark(prev => {
      const next = !prev;
      AsyncStorage.setItem(STORAGE_KEY, String(next)).catch(() => {});
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, colors: isDark ? DARK_COLORS : LIGHT_COLORS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
