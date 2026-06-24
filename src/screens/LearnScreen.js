import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LEVELS, COURSES } from '../data/learnData';
import { TOPIC_CONTENT } from '../data/topicContent';
import { useTheme } from '../context/ThemeContext';
import { typography, spacing, radius, shadows } from '../theme/colors';

const TOTAL_TOPICS   = COURSES.reduce((s, c) => s + c.topics.length, 0);
const TOTAL_LESSONS  = COURSES.reduce((s, c) => s + c.topics.reduce((ts, t) => ts + t.lessons.length, 0), 0);

const LEVEL_LABEL = Object.fromEntries(LEVELS.map(l => [l.id, l.label]));

function makeStyles(colors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flex: 1 },
    container: { paddingHorizontal: spacing.base, paddingTop: spacing.base },

    header: { marginBottom: spacing.md },
    title: {
      fontSize: typography.sizes.xxl,
      fontWeight: typography.weights.extrabold,
      color: colors.text,
    },
    subtitle: { fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: 2 },

    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      paddingHorizontal: spacing.md,
      paddingVertical: 10,
      marginBottom: spacing.md,
      gap: spacing.sm,
    },
    searchIcon: { fontSize: 16 },
    searchInput: {
      flex: 1,
      fontSize: typography.sizes.base,
      color: colors.text,
      paddingVertical: 0,
    },
    searchClear: {
      fontSize: 14,
      color: colors.textMuted,
      fontWeight: typography.weights.bold,
    },

    pillsScroll: { marginBottom: spacing.sm },
    pillsContent: { gap: spacing.sm, paddingRight: spacing.base },
    pill: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs + 2,
      borderRadius: radius.full,
      gap: spacing.xs,
    },
    pillInactive: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    pillLabel: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.textSecondary,
    },
    pillLabelActive: { color: colors.white },
    pillBadge: {
      backgroundColor: colors.divider,
      borderRadius: radius.full,
      minWidth: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
    },
    pillBadgeActive: { backgroundColor: 'rgba(255,255,255,0.25)' },
    pillBadgeText: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      color: colors.textMuted,
    },
    pillBadgeTextActive: { color: colors.white },

    resultsSummary: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      color: colors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      marginBottom: spacing.sm,
    },

    courseCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      marginBottom: spacing.sm,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    courseAccent: { width: 4, alignSelf: 'stretch' },
    cardBody: { flex: 1 },
    courseHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: spacing.md,
      gap: spacing.md,
    },
    courseIconWrap: {
      width: 44,
      height: 44,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    courseIconText: { fontSize: 22 },
    courseMeta: { flex: 1 },
    courseName: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.bold,
      color: colors.text,
      marginBottom: 4,
    },
    courseTagRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      marginBottom: 4,
      flexWrap: 'wrap',
    },
    levelTag: { borderRadius: radius.full, paddingHorizontal: spacing.sm, paddingVertical: 2 },
    levelTagText: { fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold },
    courseStatText: { fontSize: typography.sizes.xs, color: colors.textMuted },
    courseDesc: { fontSize: typography.sizes.sm, color: colors.textSecondary, lineHeight: 19 },
    chevronWrap: { paddingTop: 2, flexShrink: 0 },
    chevronOpen: { transform: [{ rotate: '180deg' }] },
    chevronText: { fontSize: 11, fontWeight: typography.weights.bold },

    topicsWrap: { paddingBottom: spacing.sm },
    topicsDivider: { height: 1, marginHorizontal: spacing.md, marginBottom: spacing.xs },
    topicRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      gap: spacing.sm,
    },
    topicDot: { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
    topicName: {
      flex: 1,
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.semibold,
      color: colors.text,
      lineHeight: 20,
    },
    topicCountBadge: {
      minWidth: 24,
      height: 22,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 6,
      flexShrink: 0,
    },
    topicCountText: { fontSize: typography.sizes.xs, fontWeight: typography.weights.bold },
    topicChevron: { fontSize: 10, fontWeight: typography.weights.bold, flexShrink: 0 },
    topicSep: {
      height: 1,
      backgroundColor: colors.divider,
      marginLeft: spacing.md + 8 + spacing.sm,
      marginRight: spacing.md,
    },

    lessonsWrap: {
      marginLeft: spacing.md + 8 + spacing.sm,
      marginRight: spacing.md,
      borderLeftWidth: 2,
      paddingLeft: spacing.sm,
      paddingBottom: spacing.xs,
    },
    lessonRow: {
      paddingVertical: spacing.sm,
      gap: 4,
    },
    lessonTitle: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.text,
      lineHeight: 20,
      marginBottom: 2,
    },
    lessonContent: {
      fontSize: typography.sizes.sm,
      color: colors.textSecondary,
      lineHeight: 20,
    },
    lessonDivider: { height: 1, backgroundColor: colors.divider, marginVertical: 2 },

    topicSummary: {
      fontSize: typography.sizes.sm,
      color: colors.textSecondary,
      lineHeight: 20,
      marginBottom: spacing.sm,
      fontStyle: 'italic',
    },
    keyFactsBox: {
      borderRadius: radius.md,
      borderWidth: 1,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.sm,
      marginBottom: spacing.sm,
      gap: 4,
    },
    keyFactsLabel: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.extrabold,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
      marginBottom: 4,
    },
    keyFactRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 6 },
    keyFactBullet: { fontSize: 10, marginTop: 3, flexShrink: 0 },
    keyFactText: {
      flex: 1,
      fontSize: typography.sizes.sm,
      color: colors.text,
      lineHeight: 19,
      fontFamily: 'monospace',
    },
    sectionDivider: { height: 1, marginVertical: spacing.sm },
    lessonsLabel: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
      marginBottom: spacing.xs,
    },

    emptyWrap: {
      alignItems: 'center',
      paddingVertical: spacing.xxxl,
      paddingHorizontal: spacing.xl,
    },
    emptyIcon: { fontSize: 48, marginBottom: spacing.md },
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
      marginBottom: spacing.lg,
    },
    emptyBtn: {
      backgroundColor: colors.primary,
      borderRadius: radius.full,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
    },
    emptyBtnText: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.semibold,
      color: colors.white,
    },
  });
}

export default function LearnScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [selectedLevel, setSelectedLevel] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [search, setSearch] = useState('');

  const filteredCourses = useMemo(() => {
    let result = COURSES;
    if (selectedLevel !== 'all') {
      result = result.filter(c => c.level === selectedLevel);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.topics.some(t =>
          t.name.toLowerCase().includes(q) ||
          t.lessons.some(l =>
            l.title.toLowerCase().includes(q) ||
            l.content.toLowerCase().includes(q)
          )
        )
      );
    }
    return result;
  }, [selectedLevel, search]);

  const visibleTopics  = filteredCourses.reduce((s, c) => s + c.topics.length, 0);
  const visibleLessons = filteredCourses.reduce((s, c) => s + c.topics.reduce((ts, t) => ts + t.lessons.length, 0), 0);

  const selectLevel = (id) => {
    setSelectedLevel(id);
    setExpandedCourse(null);
    setExpandedTopics({});
  };

  const toggleCourse = (id) => {
    setExpandedCourse(prev => prev === id ? null : id);
    setExpandedTopics({});
  };

  const toggleTopic = (key) => {
    setExpandedTopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.title}>Learn</Text>
          <Text style={styles.subtitle}>
            {COURSES.length} courses · {TOTAL_TOPICS} topics · {TOTAL_LESSONS} lessons
          </Text>
        </View>

        {/* ── Search ── */}
        <View style={[styles.searchRow, shadows.sm]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses, topics, or lessons…"
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearch('')}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.searchClear}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ── Level Pills ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContent}
          style={styles.pillsScroll}
        >
          {LEVELS.map(level => {
            const isActive = selectedLevel === level.id;
            const count = level.id === 'all'
              ? COURSES.length
              : COURSES.filter(c => c.level === level.id).length;
            return (
              <TouchableOpacity
                key={level.id}
                activeOpacity={0.7}
                onPress={() => selectLevel(level.id)}
                style={[
                  styles.pill,
                  isActive ? { backgroundColor: level.color } : styles.pillInactive,
                ]}
              >
                <Text style={[styles.pillLabel, isActive && styles.pillLabelActive]}>
                  {level.label}
                </Text>
                <View style={[styles.pillBadge, isActive && styles.pillBadgeActive]}>
                  <Text style={[styles.pillBadgeText, isActive && styles.pillBadgeTextActive]}>
                    {count}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── Results summary ── */}
        <Text style={styles.resultsSummary}>
          {filteredCourses.length === COURSES.length
            ? `All ${COURSES.length} courses`
            : `${filteredCourses.length} course${filteredCourses.length !== 1 ? 's' : ''} · ${visibleTopics} topics · ${visibleLessons} lessons`
          }
        </Text>

        {/* ── Course Cards ── */}
        {filteredCourses.map(course => {
          const isExpanded = expandedCourse === course.id;
          const totalCourseLessons = course.topics.reduce((s, t) => s + t.lessons.length, 0);
          const levelLabel = LEVEL_LABEL[course.level] || course.level;

          return (
            <View key={course.id} style={[styles.courseCard, shadows.sm]}>
              <View style={[styles.courseAccent, { backgroundColor: course.color }]} />
              <View style={styles.cardBody}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggleCourse(course.id)}
                  style={styles.courseHeader}
                >
                  <View style={[styles.courseIconWrap, { backgroundColor: course.bg }]}>
                    <Text style={styles.courseIconText}>{course.icon}</Text>
                  </View>
                  <View style={styles.courseMeta}>
                    <Text style={styles.courseName}>{course.name}</Text>
                    <View style={styles.courseTagRow}>
                      <View style={[styles.levelTag, { backgroundColor: course.bg }]}>
                        <Text style={[styles.levelTagText, { color: course.color }]}>
                          {levelLabel}
                        </Text>
                      </View>
                      <Text style={styles.courseStatText}>
                        {course.topics.length} topics · {totalCourseLessons} lessons
                      </Text>
                    </View>
                    {!isExpanded && (
                      <Text style={styles.courseDesc} numberOfLines={2}>
                        {course.description}
                      </Text>
                    )}
                  </View>
                  <View style={[styles.chevronWrap, isExpanded && styles.chevronOpen]}>
                    <Text style={[styles.chevronText, { color: course.color }]}>▼</Text>
                  </View>
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.topicsWrap}>
                    <View style={[styles.topicsDivider, { backgroundColor: course.color + '30' }]} />
                    {course.topics.map((topic, topicIdx) => {
                      const topicKey = `${course.id}-${topicIdx}`;
                      const isTopicOpen = !!expandedTopics[topicKey];
                      const isLast = topicIdx === course.topics.length - 1;

                      return (
                        <View key={topicIdx}>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => toggleTopic(topicKey)}
                            style={styles.topicRow}
                          >
                            <View style={[styles.topicDot, { backgroundColor: course.color }]} />
                            <Text style={styles.topicName} numberOfLines={2}>
                              {topic.name}
                            </Text>
                            <View style={[styles.topicCountBadge, { backgroundColor: course.bg }]}>
                              <Text style={[styles.topicCountText, { color: course.color }]}>
                                {topic.lessons.length}
                              </Text>
                            </View>
                            <Text style={[styles.topicChevron, { color: course.color }]}>
                              {isTopicOpen ? '▲' : '▼'}
                            </Text>
                          </TouchableOpacity>

                          {isTopicOpen && (
                            <View style={[styles.lessonsWrap, { borderLeftColor: course.color + '50' }]}>
                              {/* ── Topic rich content ── */}
                              {(() => {
                                const content = TOPIC_CONTENT[course.id]?.[topic.name];
                                if (!content) return null;
                                return (
                                  <>
                                    <Text style={styles.topicSummary}>{content.summary}</Text>
                                    <View style={[styles.keyFactsBox, { backgroundColor: course.bg, borderColor: course.color + '40' }]}>
                                      <Text style={[styles.keyFactsLabel, { color: course.color }]}>
                                        Key Facts & Formulas
                                      </Text>
                                      {content.keyFacts.map((fact, fi) => (
                                        <View key={fi} style={styles.keyFactRow}>
                                          <Text style={[styles.keyFactBullet, { color: course.color }]}>▸</Text>
                                          <Text style={styles.keyFactText}>{fact}</Text>
                                        </View>
                                      ))}
                                    </View>
                                    <View style={[styles.sectionDivider, { backgroundColor: course.color + '30' }]} />
                                    <Text style={[styles.lessonsLabel, { color: course.color }]}>Lessons in this topic</Text>
                                  </>
                                );
                              })()}
                              {topic.lessons.map((lesson, li) => (
                                <View key={li}>
                                  {li > 0 && <View style={styles.lessonDivider} />}
                                  <View style={styles.lessonRow}>
                                    <Text style={[styles.lessonTitle, { color: course.color }]}>
                                      {li + 1}. {lesson.title}
                                    </Text>
                                    <Text style={styles.lessonContent}>{lesson.content}</Text>
                                  </View>
                                </View>
                              ))}
                            </View>
                          )}

                          {!isLast && <View style={styles.topicSep} />}
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            </View>
          );
        })}

        {/* ── Empty state ── */}
        {filteredCourses.length === 0 && (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>No courses found</Text>
            <Text style={styles.emptyText}>
              Try a different search term or select another level.
            </Text>
            <TouchableOpacity
              style={styles.emptyBtn}
              onPress={() => { setSearch(''); selectLevel('all'); }}
            >
              <Text style={styles.emptyBtnText}>Clear filters</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}
