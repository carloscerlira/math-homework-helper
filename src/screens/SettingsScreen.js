import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSaved } from '../context/SavedContext';
import { useTheme } from '../context/ThemeContext';
import { typography, spacing, radius, shadows } from '../theme/colors';

const SECTIONS = [
  {
    title: 'Preferences',
    items: [
      { id: 'notifications', label: 'Notifications', icon: '🔔', type: 'toggle' },
      { id: 'dailyReminder', label: 'Daily Reminder', icon: '⏰', type: 'toggle' },
      { id: 'darkMode', label: 'Dark Mode', icon: '🌙', type: 'toggle' },
      { id: 'sound', label: 'Sound Effects', icon: '🔊', type: 'toggle' },
    ],
  },
  {
    title: 'Account',
    items: [
      { id: 'privacy', label: 'Privacy Policy', icon: '🔒', type: 'nav' },
      { id: 'help', label: 'Help & Support', icon: '💬', type: 'nav' },
    ],
  },
];

function makeStyles(colors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flex: 1 },
    container: { paddingHorizontal: spacing.base, paddingTop: spacing.base },
    pageTitle: {
      fontSize: typography.sizes.xxl,
      fontWeight: typography.weights.extrabold,
      color: colors.text,
      marginBottom: spacing.base,
    },

    statsCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.base,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    statsItem: { alignItems: 'center', flex: 1 },
    statsVal: { fontSize: typography.sizes.lg, fontWeight: typography.weights.bold, color: colors.text },
    statsValDanger: { color: colors.error },
    statsValDisabled: { color: colors.textMuted },
    statsLabel: { fontSize: 10, color: colors.textMuted, marginTop: 2 },
    statsDivider: { width: 1, height: 32, backgroundColor: colors.divider },

    section: { marginBottom: spacing.base },
    sectionTitle: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      color: colors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: spacing.xs,
      paddingHorizontal: spacing.xs,
    },
    sectionCard: { backgroundColor: colors.surface, borderRadius: radius.lg, overflow: 'hidden' },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.base,
      gap: spacing.md,
    },
    rowIconWrap: {
      width: 36,
      height: 36,
      borderRadius: radius.sm,
      backgroundColor: colors.surfaceAlt,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowIcon: { fontSize: 18 },
    rowLabel: {
      flex: 1,
      fontSize: typography.sizes.base,
      color: colors.text,
      fontWeight: typography.weights.medium,
    },
    rowRight: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
    navArrow: { fontSize: 20, color: colors.textMuted },
    rowDivider: {
      height: 1,
      backgroundColor: colors.divider,
      marginLeft: spacing.base + 36 + spacing.md,
    },

    appInfo: { alignItems: 'center', paddingVertical: spacing.xl },
    appInfoTitle: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      color: colors.textMuted,
    },
    appInfoVersion: { fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: 2 },
  });
}

export default function SettingsScreen() {
  const { savedItems, deleteSaved } = useSaved();
  const { colors, isDark, toggleDark } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  // Local toggles for non-functional preferences (notifications, sound, etc.)
  const [localToggles, setLocalToggles] = useState({ notifications: true, dailyReminder: true, sound: true });

  const handleToggle = (id) => {
    if (id === 'darkMode') {
      toggleDark();
    } else {
      setLocalToggles(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const getToggleValue = (id) => {
    if (id === 'darkMode') return isDark;
    return localToggles[id] ?? false;
  };

  const confirmClearAll = () => {
    if (savedItems.length === 0) return;
    savedItems.forEach((item) => deleteSaved(item.id));
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Settings</Text>

        {/* ── Saved scans stat ── */}
        <View style={[styles.statsCard, shadows.sm]}>
          <View style={styles.statsItem}>
            <Text style={styles.statsVal}>{savedItems.length}</Text>
            <Text style={styles.statsLabel}>Saved Scans</Text>
          </View>
          <View style={styles.statsDivider} />
          <TouchableOpacity
            style={styles.statsItem}
            onPress={confirmClearAll}
            disabled={savedItems.length === 0}
          >
            <Text style={[
              styles.statsVal,
              styles.statsValDanger,
              savedItems.length === 0 && styles.statsValDisabled,
            ]}>
              Clear All
            </Text>
            <Text style={styles.statsLabel}>Saved Scans</Text>
          </TouchableOpacity>
        </View>

        {/* ── Settings sections ── */}
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={[styles.sectionCard, shadows.sm]}>
              {section.items.map((item, index) => {
                const isLast = index === section.items.length - 1;
                return (
                  <View key={item.id}>
                    <TouchableOpacity
                      activeOpacity={item.type === 'toggle' ? 1 : 0.7}
                      style={styles.row}
                      onPress={item.type === 'toggle' ? () => handleToggle(item.id) : undefined}
                    >
                      <View style={styles.rowIconWrap}>
                        <Text style={styles.rowIcon}>{item.icon}</Text>
                      </View>
                      <Text style={styles.rowLabel}>{item.label}</Text>
                      <View style={styles.rowRight}>
                        {item.type === 'toggle' && (
                          <Switch
                            value={getToggleValue(item.id)}
                            onValueChange={() => handleToggle(item.id)}
                            trackColor={{ false: colors.border, true: colors.primary }}
                            thumbColor={colors.white}
                          />
                        )}
                        {item.type === 'nav' && (
                          <Text style={styles.navArrow}>›</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                    {!isLast && <View style={styles.rowDivider} />}
                  </View>
                );
              })}
            </View>
          </View>
        ))}

        <View style={styles.appInfo}>
          <Text style={styles.appInfoTitle}>Math Homework Helper</Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0 · Powered by Groq AI</Text>
        </View>

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}
