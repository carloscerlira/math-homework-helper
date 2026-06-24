import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/DashboardScreen';
import SavedScreen from '../screens/SavedScreen';
import LearnScreen from '../screens/LearnScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SavedProvider } from '../context/SavedContext';
import { useTheme } from '../context/ThemeContext';
import { typography } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Dashboard: { active: '⊞', inactive: '⊟' },
  Saved:     { active: '🔖', inactive: '🔖' },
  Learn:     { active: '📖', inactive: '📕' },
  Quiz:      { active: '⚡', inactive: '⚡' },
  Settings:  { active: '⚙️', inactive: '⚙️' },
};

function TabIcon({ name, focused, colors }) {
  const icon = TAB_ICONS[name];
  return (
    <View style={[
      tabIconStyles.wrap,
      focused && { backgroundColor: colors.primaryLight },
    ]}>
      <Text style={tabIconStyles.text}>{focused ? icon.active : icon.inactive}</Text>
    </View>
  );
}

const tabIconStyles = StyleSheet.create({
  wrap: { width: 40, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 12 },
  text: { fontSize: 20 },
});

export default function AppNavigator() {
  const { colors } = useTheme();

  const tabBarStyle = useMemo(() => ({
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    height: 80,
    paddingBottom: 12,
    paddingTop: 8,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 16,
  }), [colors.surface]);

  return (
    <SavedProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon name={route.name} focused={focused} colors={colors} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={[
                labelStyle,
                { color: focused ? colors.primary : colors.textMuted },
                focused && { fontWeight: typography.weights.bold },
              ]}>
                {route.name}
              </Text>
            ),
            tabBarStyle,
            tabBarItemStyle: { paddingTop: 4 },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Saved"     component={SavedScreen} />
          <Tab.Screen name="Learn"     component={LearnScreen} />
          <Tab.Screen name="Quiz"      component={QuizScreen} />
          <Tab.Screen name="Settings"  component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SavedProvider>
  );
}

const labelStyle = {
  fontSize: typography.sizes.xs,
  fontWeight: typography.weights.medium,
  marginTop: 2,
};
