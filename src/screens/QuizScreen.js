import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QUESTIONS } from '../data/quizData';
import { useTheme } from '../context/ThemeContext';
import { typography, spacing, radius, shadows } from '../theme/colors';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const DIFF_CONFIG = {
  all:    { label: 'All',    color: '#6C63FF' },
  easy:   { label: 'Easy',   color: '#43C59E' },
  medium: { label: 'Medium', color: '#FFBE0B' },
  hard:   { label: 'Hard',   color: '#FF6584' },
};

const LEVEL_CONFIG = {
  all:        { label: 'All',           color: '#6C63FF' },
  elementary: { label: 'Elementary',   color: '#43C59E' },
  middle:     { label: 'Middle School', color: '#4FACFE' },
  high:       { label: 'High School',   color: '#6C63FF' },
  college:    { label: 'College',       color: '#FF6584' },
  advanced:   { label: 'Advanced',      color: '#FA8231' },
};

const LENGTHS = [5, 10, 15, 20];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function gradeLabel(pct) {
  if (pct >= 90) return { text: 'Excellent! 🏆', color: '#43C59E' };
  if (pct >= 75) return { text: 'Great Work! 🎯', color: '#6C63FF' };
  if (pct >= 60) return { text: 'Good Job! 👍', color: '#FFBE0B' };
  return { text: 'Keep Practicing! 💪', color: '#FF6584' };
}

function makeStyles(colors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },

    // Home
    homeContainer: { paddingHorizontal: spacing.base, paddingTop: spacing.base },
    homeHeader: { marginBottom: spacing.lg },
    title: { fontSize: typography.sizes.xxl, fontWeight: typography.weights.extrabold, color: colors.text },
    subtitle: { fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: 2 },

    statsCard: {
      backgroundColor: colors.primary,
      borderRadius: radius.lg,
      padding: spacing.base,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    statsItem: { alignItems: 'center', flex: 1 },
    statsVal: { fontSize: typography.sizes.xl, fontWeight: typography.weights.bold, color: colors.white },
    statsLbl: { fontSize: typography.sizes.xs, color: 'rgba(255,255,255,0.75)', marginTop: 2 },
    statsDivider: { width: 1, height: 32, backgroundColor: 'rgba(255,255,255,0.25)' },

    filterLabel: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.bold,
      color: colors.textMuted,
      letterSpacing: 0.8,
      marginBottom: spacing.sm,
      marginTop: spacing.base,
    },
    filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.xs },
    filterPill: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs + 2,
      borderRadius: radius.full,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    filterPillText: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.textSecondary,
    },

    availableText: {
      fontSize: typography.sizes.sm,
      color: colors.textMuted,
      marginTop: spacing.md,
      marginBottom: spacing.base,
      textAlign: 'center',
    },
    startBtn: {
      backgroundColor: colors.primary,
      borderRadius: radius.lg,
      paddingVertical: spacing.md + 2,
      alignItems: 'center',
    },
    startBtnDisabled: { backgroundColor: colors.border },
    startBtnText: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.bold,
      color: colors.white,
    },

    // Playing
    playingContainer: { paddingHorizontal: spacing.base, paddingTop: spacing.base },
    progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.xs },
    progressText: { fontSize: typography.sizes.sm, fontWeight: typography.weights.bold, color: colors.text },
    scoreText: { fontSize: typography.sizes.sm, color: colors.textMuted },
    progressTrack: {
      height: 6,
      backgroundColor: colors.divider,
      borderRadius: radius.full,
      marginBottom: spacing.base,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: radius.full,
      minWidth: 6,
    },

    badgeRow: { flexDirection: 'row', gap: spacing.xs, marginBottom: spacing.md, flexWrap: 'wrap' },
    badge: {
      backgroundColor: colors.surfaceAlt,
      borderRadius: radius.full,
      paddingHorizontal: spacing.sm,
      paddingVertical: 3,
    },
    badgeText: {
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.semibold,
      color: colors.textSecondary,
    },

    questionCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.base,
    },
    questionText: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.semibold,
      color: colors.text,
      lineHeight: 26,
    },

    optionsContainer: { gap: spacing.sm, marginBottom: spacing.base },
    option: {
      backgroundColor: colors.surface,
      borderRadius: radius.md,
      padding: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      borderWidth: 2,
      borderColor: colors.border,
    },
    optionCorrect: { backgroundColor: colors.successLight, borderColor: colors.success },
    optionWrong:   { backgroundColor: colors.errorLight,   borderColor: colors.error },
    optionDim:     { backgroundColor: colors.surface, borderColor: colors.divider, opacity: 0.5 },
    optionLabel: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: colors.surfaceAlt,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    optionLabelCorrect: { backgroundColor: colors.success },
    optionLabelWrong:   { backgroundColor: colors.error },
    optionLabelText: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.bold,
      color: colors.text,
    },
    optionText: { flex: 1, fontSize: typography.sizes.base, color: colors.text, lineHeight: 21 },
    optionTextCorrect: { color: colors.success, fontWeight: typography.weights.semibold },
    optionTextWrong:   { color: colors.error },
    optionTextDim:     { color: colors.textMuted },
    optionIcon:      { fontSize: 18, color: colors.success, fontWeight: typography.weights.bold },
    optionIconWrong: { fontSize: 18, color: colors.error,   fontWeight: typography.weights.bold },

    explanationCard: {
      borderRadius: radius.lg,
      padding: spacing.base,
      marginBottom: spacing.base,
      borderLeftWidth: 4,
    },
    explanationCorrect: { backgroundColor: colors.successLight, borderLeftColor: colors.success },
    explanationWrong:   { backgroundColor: colors.errorLight,   borderLeftColor: colors.error },
    explanationHeader: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      color: colors.text,
      marginBottom: spacing.sm,
    },
    explanationText: { fontSize: typography.sizes.sm, color: colors.text, lineHeight: 21 },
    correctAnswerText: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.success,
      marginTop: spacing.sm,
    },

    nextBtn: {
      backgroundColor: colors.primary,
      borderRadius: radius.lg,
      paddingVertical: spacing.md + 2,
      alignItems: 'center',
    },
    nextBtnText: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.bold,
      color: colors.white,
    },

    // Result
    resultContainer: { paddingHorizontal: spacing.base, paddingTop: spacing.lg },
    scoreRing: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: spacing.base,
    },
    scoreRingVal: {
      fontSize: typography.sizes.xl,
      fontWeight: typography.weights.extrabold,
      color: colors.white,
    },
    scoreRingPct: { fontSize: typography.sizes.base, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
    gradeText: {
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.bold,
      textAlign: 'center',
      marginBottom: spacing.lg,
    },

    breakdownCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.base,
      marginBottom: spacing.base,
      gap: spacing.sm,
    },
    breakdownRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
    breakdownDot: { width: 10, height: 10, borderRadius: 5 },
    breakdownLabel: {
      width: 60,
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.text,
    },
    breakdownScore: { width: 40, fontSize: typography.sizes.sm, color: colors.textMuted, textAlign: 'right' },
    breakdownBar: {
      flex: 1,
      height: 8,
      backgroundColor: colors.divider,
      borderRadius: radius.full,
      overflow: 'hidden',
    },
    breakdownFill: { height: '100%', borderRadius: radius.full },

    reviewToggle: { alignItems: 'center', paddingVertical: spacing.sm, marginBottom: spacing.sm },
    reviewToggleText: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.semibold,
      color: colors.primary,
    },

    reviewCard: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.base,
      marginBottom: spacing.sm,
      borderLeftWidth: 4,
    },
    reviewCorrect: { borderLeftColor: colors.success },
    reviewWrong:   { borderLeftColor: colors.error },
    reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.xs },
    reviewBadges: { flexDirection: 'row', gap: spacing.xs },
    reviewNum: { fontSize: typography.sizes.sm, fontWeight: typography.weights.bold },
    reviewNumCorrect: { color: colors.success },
    reviewNumWrong:   { color: colors.error },
    reviewQuestion: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.semibold,
      color: colors.text,
      lineHeight: 21,
      marginBottom: spacing.sm,
    },
    reviewYourAnswer: { fontSize: typography.sizes.sm, color: colors.error, marginBottom: 2 },
    reviewCorrectAnswer: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.semibold,
      color: colors.success,
      marginBottom: spacing.sm,
    },
    reviewExplanation: {
      fontSize: typography.sizes.sm,
      color: colors.textSecondary,
      lineHeight: 19,
      borderTopWidth: 1,
      borderTopColor: colors.divider,
      paddingTop: spacing.sm,
      marginTop: spacing.xs,
    },

    resultBtns: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.base },
    resultBtn: { flex: 1, borderRadius: radius.lg, paddingVertical: spacing.md, alignItems: 'center' },
    resultBtnPrimary: { backgroundColor: colors.primary },
    resultBtnSecondary: { backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.primary },
    resultBtnPrimaryText: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      color: colors.white,
    },
    resultBtnSecondaryText: {
      fontSize: typography.sizes.base,
      fontWeight: typography.weights.bold,
      color: colors.primary,
    },
  });
}

// ── HOME SCREEN ────────────────────────────────────────────────────────────
function HomeView({ onStart }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [diffFilter, setDiffFilter]   = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [quizLen, setQuizLen]         = useState(10);

  const available = useMemo(() => {
    return QUESTIONS.filter(q =>
      (diffFilter  === 'all' || q.difficulty === diffFilter) &&
      (levelFilter === 'all' || q.level      === levelFilter)
    ).length;
  }, [diffFilter, levelFilter]);

  const canStart = available >= quizLen;

  return (
    <ScrollView
      contentContainerStyle={styles.homeContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.homeHeader}>
        <Text style={styles.title}>Quiz</Text>
        <Text style={styles.subtitle}>Test your math knowledge</Text>
      </View>

      <View style={[styles.statsCard, shadows.md]}>
        <View style={styles.statsItem}>
          <Text style={styles.statsVal}>{QUESTIONS.length}</Text>
          <Text style={styles.statsLbl}>Questions</Text>
        </View>
        <View style={styles.statsDivider} />
        <View style={styles.statsItem}>
          <Text style={styles.statsVal}>5</Text>
          <Text style={styles.statsLbl}>Levels</Text>
        </View>
        <View style={styles.statsDivider} />
        <View style={styles.statsItem}>
          <Text style={styles.statsVal}>3</Text>
          <Text style={styles.statsLbl}>Difficulties</Text>
        </View>
      </View>

      <Text style={styles.filterLabel}>DIFFICULTY</Text>
      <View style={styles.filterRow}>
        {Object.entries(DIFF_CONFIG).map(([key, cfg]) => {
          const active = diffFilter === key;
          return (
            <TouchableOpacity
              key={key}
              style={[styles.filterPill, active && { backgroundColor: cfg.color }]}
              onPress={() => setDiffFilter(key)}
            >
              <Text style={[styles.filterPillText, active && { color: colors.white }]}>
                {cfg.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.filterLabel}>LEVEL</Text>
      <View style={styles.filterRow}>
        {Object.entries(LEVEL_CONFIG).map(([key, cfg]) => {
          const active = levelFilter === key;
          return (
            <TouchableOpacity
              key={key}
              style={[styles.filterPill, active && { backgroundColor: cfg.color }]}
              onPress={() => setLevelFilter(key)}
            >
              <Text style={[styles.filterPillText, active && { color: colors.white }]}>
                {cfg.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.filterLabel}>NUMBER OF QUESTIONS</Text>
      <View style={styles.filterRow}>
        {LENGTHS.map(n => {
          const active = quizLen === n;
          return (
            <TouchableOpacity
              key={n}
              style={[styles.filterPill, active && { backgroundColor: colors.primary }]}
              onPress={() => setQuizLen(n)}
            >
              <Text style={[styles.filterPillText, active && { color: colors.white }]}>{n}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.availableText}>
        {available} question{available !== 1 ? 's' : ''} available
        {!canStart && ` — need at least ${quizLen}`}
      </Text>

      <TouchableOpacity
        style={[styles.startBtn, !canStart && styles.startBtnDisabled]}
        disabled={!canStart}
        onPress={() => onStart(diffFilter, levelFilter, quizLen)}
      >
        <Text style={styles.startBtnText}>Start Quiz →</Text>
      </TouchableOpacity>

      <View style={{ height: spacing.xxl }} />
    </ScrollView>
  );
}

// ── PLAYING SCREEN ─────────────────────────────────────────────────────────
function PlayingView({ questions, currentIdx, selected, onSelect, onNext, answers }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const q = questions[currentIdx];
  const answered = selected !== null;
  const isLast = currentIdx === questions.length - 1;
  const score = answers.filter(a => a.isCorrect).length;
  const pct = Math.round((currentIdx / questions.length) * 100);

  const diffCfg  = DIFF_CONFIG[q.difficulty]  || DIFF_CONFIG.medium;
  const levelCfg = LEVEL_CONFIG[q.level] || LEVEL_CONFIG.all;

  const getOptionStyle = (idx) => {
    if (!answered) return styles.option;
    if (idx === q.correctIndex) return [styles.option, styles.optionCorrect];
    if (idx === selected && selected !== q.correctIndex) return [styles.option, styles.optionWrong];
    return [styles.option, styles.optionDim];
  };

  const getOptionTextStyle = (idx) => {
    if (!answered) return styles.optionText;
    if (idx === q.correctIndex) return [styles.optionText, styles.optionTextCorrect];
    if (idx === selected && selected !== q.correctIndex) return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDim];
  };

  const getLabelStyle = (idx) => {
    if (!answered) return styles.optionLabel;
    if (idx === q.correctIndex) return [styles.optionLabel, styles.optionLabelCorrect];
    if (idx === selected && selected !== q.correctIndex) return [styles.optionLabel, styles.optionLabelWrong];
    return styles.optionLabel;
  };

  return (
    <ScrollView
      contentContainerStyle={styles.playingContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>{currentIdx + 1} / {questions.length}</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${pct}%` }]} />
      </View>

      <View style={styles.badgeRow}>
        <View style={[styles.badge, { backgroundColor: diffCfg.color + '20' }]}>
          <Text style={[styles.badgeText, { color: diffCfg.color }]}>{diffCfg.label}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: levelCfg.color + '20' }]}>
          <Text style={[styles.badgeText, { color: levelCfg.color }]}>{levelCfg.label}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{q.topic}</Text>
        </View>
      </View>

      <View style={[styles.questionCard, shadows.sm]}>
        <Text style={styles.questionText}>{q.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {q.options.map((opt, idx) => (
          <TouchableOpacity
            key={idx}
            style={getOptionStyle(idx)}
            onPress={() => !answered && onSelect(idx)}
            activeOpacity={answered ? 1 : 0.7}
            disabled={answered}
          >
            <View style={getLabelStyle(idx)}>
              <Text style={styles.optionLabelText}>{OPTION_LABELS[idx]}</Text>
            </View>
            <Text style={getOptionTextStyle(idx)}>{opt}</Text>
            {answered && idx === q.correctIndex && (
              <Text style={styles.optionIcon}>✓</Text>
            )}
            {answered && idx === selected && selected !== q.correctIndex && (
              <Text style={styles.optionIconWrong}>✗</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {answered && (
        <View style={[
          styles.explanationCard,
          selected === q.correctIndex ? styles.explanationCorrect : styles.explanationWrong,
        ]}>
          <Text style={styles.explanationHeader}>
            {selected === q.correctIndex ? '✓  Correct!' : '✗  Incorrect'}
          </Text>
          <Text style={styles.explanationText}>{q.explanation}</Text>
          {selected !== q.correctIndex && (
            <Text style={styles.correctAnswerText}>
              Correct answer: {q.options[q.correctIndex]}
            </Text>
          )}
        </View>
      )}

      {answered && (
        <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
          <Text style={styles.nextBtnText}>
            {isLast ? 'See Results →' : 'Next Question →'}
          </Text>
        </TouchableOpacity>
      )}

      <View style={{ height: spacing.xxl }} />
    </ScrollView>
  );
}

// ── RESULT SCREEN ──────────────────────────────────────────────────────────
function ResultView({ questions, answers, onPlayAgain, onNewQuiz }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [showReview, setShowReview] = useState(false);

  const score = answers.filter(a => a.isCorrect).length;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const grade = gradeLabel(pct);

  return (
    <ScrollView
      contentContainerStyle={styles.resultContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.scoreRing, shadows.md]}>
        <Text style={styles.scoreRingVal}>{score}/{total}</Text>
        <Text style={styles.scoreRingPct}>{pct}%</Text>
      </View>

      <Text style={[styles.gradeText, { color: grade.color }]}>{grade.text}</Text>

      <View style={[styles.breakdownCard, shadows.sm]}>
        {['easy', 'medium', 'hard'].map(diff => {
          const qs = questions.filter(q => q.difficulty === diff);
          if (qs.length === 0) return null;
          const correct = qs.filter((q, i) => {
            const idx = questions.indexOf(q);
            return answers[idx]?.isCorrect;
          }).length;
          const cfg = DIFF_CONFIG[diff];
          return (
            <View key={diff} style={styles.breakdownRow}>
              <View style={[styles.breakdownDot, { backgroundColor: cfg.color }]} />
              <Text style={styles.breakdownLabel}>{cfg.label}</Text>
              <Text style={styles.breakdownScore}>{correct} / {qs.length}</Text>
              <View style={styles.breakdownBar}>
                <View style={[styles.breakdownFill, {
                  backgroundColor: cfg.color,
                  width: qs.length > 0 ? `${Math.round((correct / qs.length) * 100)}%` : '0%',
                }]} />
              </View>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.reviewToggle}
        onPress={() => setShowReview(v => !v)}
      >
        <Text style={styles.reviewToggleText}>
          {showReview ? 'Hide Review ▲' : 'Review All Questions ▼'}
        </Text>
      </TouchableOpacity>

      {showReview && questions.map((q, i) => {
        const ans = answers[i];
        const correct = ans?.isCorrect;
        return (
          <View key={i} style={[styles.reviewCard, correct ? styles.reviewCorrect : styles.reviewWrong, shadows.sm]}>
            <View style={styles.reviewHeader}>
              <Text style={[styles.reviewNum, correct ? styles.reviewNumCorrect : styles.reviewNumWrong]}>
                {correct ? '✓' : '✗'} Q{i + 1}
              </Text>
              <View style={styles.reviewBadges}>
                <View style={[styles.badge, { backgroundColor: DIFF_CONFIG[q.difficulty]?.color + '20' || '#eee' }]}>
                  <Text style={[styles.badgeText, { color: DIFF_CONFIG[q.difficulty]?.color || '#666' }]}>
                    {DIFF_CONFIG[q.difficulty]?.label}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewQuestion}>{q.question}</Text>
            {!correct && (
              <>
                <Text style={styles.reviewYourAnswer}>
                  Your answer: {q.options[ans?.selectedIndex]}
                </Text>
                <Text style={styles.reviewCorrectAnswer}>
                  Correct: {q.options[q.correctIndex]}
                </Text>
              </>
            )}
            <Text style={styles.reviewExplanation}>{q.explanation}</Text>
          </View>
        );
      })}

      <View style={styles.resultBtns}>
        <TouchableOpacity style={[styles.resultBtn, styles.resultBtnSecondary]} onPress={onNewQuiz}>
          <Text style={styles.resultBtnSecondaryText}>New Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.resultBtn, styles.resultBtnPrimary]} onPress={onPlayAgain}>
          <Text style={styles.resultBtnPrimaryText}>Play Again</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: spacing.xxl }} />
    </ScrollView>
  );
}

// ── MAIN SCREEN ────────────────────────────────────────────────────────────
export default function QuizScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [phase, setPhase]           = useState('home');
  const [questions, setQuestions]   = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected]     = useState(null);
  const [answers, setAnswers]       = useState([]);
  const [savedFilters, setSavedFilters] = useState({ diff: 'all', level: 'all', len: 10 });

  const startQuiz = (diff, level, len) => {
    const pool = QUESTIONS.filter(q =>
      (diff  === 'all' || q.difficulty === diff) &&
      (level === 'all' || q.level      === level)
    );
    const picked = shuffle(pool).slice(0, len);
    setSavedFilters({ diff, level, len });
    setQuestions(picked);
    setCurrentIdx(0);
    setSelected(null);
    setAnswers([]);
    setPhase('playing');
  };

  const handleSelect = (idx) => {
    setSelected(idx);
    setAnswers(prev => [...prev, {
      selectedIndex: idx,
      isCorrect: idx === questions[currentIdx].correctIndex,
    }]);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
    } else {
      setPhase('result');
    }
  };

  const handlePlayAgain = () => {
    startQuiz(savedFilters.diff, savedFilters.level, savedFilters.len);
  };

  const handleNewQuiz = () => {
    setPhase('home');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {phase === 'home' && (
        <HomeView onStart={startQuiz} />
      )}
      {phase === 'playing' && (
        <PlayingView
          questions={questions}
          currentIdx={currentIdx}
          selected={selected}
          answers={answers}
          onSelect={handleSelect}
          onNext={handleNext}
        />
      )}
      {phase === 'result' && (
        <ResultView
          questions={questions}
          answers={answers}
          onPlayAgain={handlePlayAgain}
          onNewQuiz={handleNewQuiz}
        />
      )}
    </SafeAreaView>
  );
}
