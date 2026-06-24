import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSaved } from '../context/SavedContext';
import { useTheme } from '../context/ThemeContext';
import { typography, spacing, radius, shadows } from '../theme/colors';

function formatDate(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function makeStyles(colors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flex: 1 },
    container: { paddingHorizontal: spacing.base, paddingTop: spacing.base },

    header: { marginBottom: spacing.base },
    title: { fontSize: typography.sizes.xxl, fontWeight: typography.weights.extrabold, color: colors.text },
    subtitle: { fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: 2 },

    summaryCard: {
      backgroundColor: colors.primary,
      borderRadius: radius.lg,
      padding: spacing.base,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    summaryItem: { alignItems: 'center', flex: 1 },
    summaryValue: { fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.white },
    summaryLabel: { fontSize: typography.sizes.xs, color: 'rgba(255,255,255,0.75)', marginTop: 2 },
    summaryDivider: { width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.25)' },

    emptyWrap: {
      alignItems: 'center',
      paddingVertical: spacing.xxxl,
      paddingHorizontal: spacing.xl,
    },
    emptyIcon: { fontSize: 56, marginBottom: spacing.md },
    emptyTitle: {
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.bold,
      color: colors.text,
      marginBottom: spacing.sm,
      textAlign: 'center',
    },
    emptyText: {
      fontSize: typography.sizes.base,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },
    emptyHighlight: { color: colors.primary, fontWeight: typography.weights.semibold },

    itemCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      marginBottom: spacing.sm,
      overflow: 'hidden',
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing.md,
      gap: spacing.md,
    },
    thumb: { width: 68, height: 68, borderRadius: radius.md, backgroundColor: colors.surfaceAlt },
    itemBody: { flex: 1 },
    itemTitle: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.semibold,
      color: colors.text,
      marginBottom: 2,
    },
    itemDate: { fontSize: typography.sizes.xs, color: colors.textMuted, marginBottom: 4 },
    itemPreview: { fontSize: typography.sizes.xs, color: colors.textSecondary, lineHeight: 16 },
    itemRight: { alignItems: 'center', gap: spacing.sm },
    deleteBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
    deleteBtnText: { fontSize: 18 },
    chevron: { fontSize: 12, color: colors.textMuted },

    expanded: { paddingHorizontal: spacing.md, paddingBottom: spacing.md },
    expandedDivider: { height: 1, backgroundColor: colors.divider, marginBottom: spacing.md },
    expandedImage: {
      width: '100%',
      height: 220,
      borderRadius: radius.md,
      backgroundColor: colors.surfaceAlt,
      marginBottom: spacing.md,
    },
    expandedLabel: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.bold,
      color: colors.primary,
      marginBottom: spacing.sm,
    },
    expandedText: {
      fontSize: typography.sizes.sm,
      color: colors.text,
      lineHeight: 22,
      fontFamily: 'monospace',
    },
  });
}

export default function SavedScreen() {
  const { savedItems, deleteSaved } = useSaved();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [expandedId, setExpandedId] = useState(null);

  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Scan',
      'Remove this scan and its solution?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteSaved(id);
            if (expandedId === id) setExpandedId(null);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Saved</Text>
            <Text style={styles.subtitle}>
              {savedItems.length} scan{savedItems.length !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>

        {/* ── Summary bar ── */}
        <View style={[styles.summaryCard, shadows.md]}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{savedItems.length}</Text>
            <Text style={styles.summaryLabel}>Total Scans</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue} numberOfLines={1}>
              {savedItems.length > 0 ? formatDate(savedItems[0].savedAt) : '—'}
            </Text>
            <Text style={styles.summaryLabel}>Last Saved</Text>
          </View>
        </View>

        {/* ── Empty state ── */}
        {savedItems.length === 0 && (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyIcon}>📷</Text>
            <Text style={styles.emptyTitle}>No saved scans yet</Text>
            <Text style={styles.emptyText}>
              Go to Dashboard, scan your homework, and tap{' '}
              <Text style={styles.emptyHighlight}>"Save to Saved"</Text>
              {' '}after the AI analysis appears.
            </Text>
          </View>
        )}

        {/* ── Saved items ── */}
        {savedItems.map((item) => {
          const isExpanded = expandedId === item.id;
          const preview = item.analysisText.slice(0, 130).trimEnd() +
            (item.analysisText.length > 130 ? '…' : '');

          return (
            <View key={item.id} style={[styles.itemCard, shadows.sm]}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                style={styles.itemRow}
              >
                <Image source={{ uri: item.photoUri }} style={styles.thumb} resizeMode="cover" />
                <View style={styles.itemBody}>
                  <Text style={styles.itemTitle}>Homework Scan</Text>
                  <Text style={styles.itemDate}>{formatDate(item.savedAt)}</Text>
                  <Text style={styles.itemPreview} numberOfLines={2}>{preview}</Text>
                </View>
                <View style={styles.itemRight}>
                  <TouchableOpacity
                    onPress={() => confirmDelete(item.id)}
                    style={styles.deleteBtn}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <Text style={styles.deleteBtnText}>🗑</Text>
                  </TouchableOpacity>
                  <Text style={styles.chevron}>{isExpanded ? '▲' : '▼'}</Text>
                </View>
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.expanded}>
                  <View style={styles.expandedDivider} />
                  <Image
                    source={{ uri: item.photoUri }}
                    style={styles.expandedImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.expandedLabel}>✦  Solution Breakdown</Text>
                  <Text style={styles.expandedText}>{item.analysisText}</Text>
                </View>
              )}
            </View>
          );
        })}

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}
