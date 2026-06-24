import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@math_helper_saved_scans';
const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Hydrate from storage on first mount
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) {
          try { setSavedItems(JSON.parse(raw)); } catch (_) {}
        }
      })
      .finally(() => setLoaded(true));
  }, []);

  // Persist whenever the list changes (skip the initial hydration render)
  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)).catch(() => {});
  }, [savedItems, loaded]);

  const saveAnalysis = (photoUri, analysisText) => {
    const item = {
      id: Date.now().toString(),
      photoUri,
      analysisText,
      savedAt: new Date().toISOString(),
    };
    setSavedItems((prev) => [item, ...prev]);
  };

  const deleteSaved = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SavedContext.Provider value={{ savedItems, saveAnalysis, deleteSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error('useSaved must be used inside SavedProvider');
  return ctx;
}
