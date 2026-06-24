import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { analyzeMathImage } from '../services/openaiService';
import { useSaved } from '../context/SavedContext';
import { useTheme } from '../context/ThemeContext';
import { typography, spacing, radius, shadows } from '../theme/colors';

const { width } = Dimensions.get('window');

function makeStyles(colors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flex: 1 },
    container: { paddingHorizontal: spacing.base, paddingTop: spacing.base },

    hero: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    heroTitle: { fontSize: typography.sizes.xxl, fontWeight: typography.weights.extrabold, color: colors.text },
    heroSub: { fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: 2 },
    savedBadge: {
      backgroundColor: colors.primaryLight,
      borderRadius: radius.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
    },
    savedBadgeText: { fontSize: typography.sizes.sm, color: colors.primary, fontWeight: typography.weights.bold },

    card: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.base,
      marginBottom: spacing.base,
    },
    cardTitle: { fontSize: typography.sizes.md, fontWeight: typography.weights.bold, color: colors.text, marginBottom: spacing.xs },
    cardSub: { fontSize: typography.sizes.sm, color: colors.textMuted, marginBottom: spacing.md, lineHeight: 18 },

    photoButtons: { flexDirection: 'row', gap: spacing.sm },
    photoBtn: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.xs,
      backgroundColor: colors.primary,
      borderRadius: radius.md,
      paddingVertical: spacing.sm,
    },
    photoBtnAlt: { backgroundColor: colors.surfaceAlt },
    photoBtnIcon: { fontSize: 16 },
    photoBtnText: { fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.white },
    photoBtnTextAlt: { color: colors.primary },

    previewWrap: { marginTop: spacing.md },
    previewImage: { width: '100%', height: width - spacing.base * 4, borderRadius: radius.md },
    previewActions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: spacing.sm },
    removeBtn: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      backgroundColor: colors.surfaceAlt,
      borderRadius: radius.full,
    },
    removeBtnText: { fontSize: typography.sizes.sm, color: colors.textSecondary, fontWeight: typography.weights.medium },

    analyzeBtn: {
      marginTop: spacing.md,
      backgroundColor: colors.primary,
      borderRadius: radius.md,
      paddingVertical: spacing.sm + 2,
      alignItems: 'center',
    },
    analyzeBtnText: { fontSize: typography.sizes.base, fontWeight: typography.weights.bold, color: colors.white },
    analyzingWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.sm,
      marginTop: spacing.md,
      paddingVertical: spacing.sm,
    },
    analyzingText: { fontSize: typography.sizes.sm, color: colors.primary, fontWeight: typography.weights.medium },

    resultsCard: { borderWidth: 1, borderColor: colors.primaryLight },
    resultsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
    resultsTitle: { marginBottom: 0, color: colors.primary },
    clearBtn: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      backgroundColor: colors.surfaceAlt,
      borderRadius: radius.full,
    },
    clearBtnText: { fontSize: typography.sizes.xs, color: colors.textSecondary, fontWeight: typography.weights.medium },
    resultsText: { fontSize: typography.sizes.sm, color: colors.text, lineHeight: 22, fontFamily: 'monospace' },
    errorBox: { backgroundColor: colors.errorLight, borderRadius: radius.md, padding: spacing.md },
    errorText: { fontSize: typography.sizes.sm, color: colors.error, lineHeight: 20 },

    saveBtn: {
      marginTop: spacing.md,
      backgroundColor: colors.primary,
      borderRadius: radius.md,
      paddingVertical: spacing.sm + 2,
      alignItems: 'center',
    },
    saveBtnDone: { backgroundColor: colors.successLight },
    saveBtnText: { fontSize: typography.sizes.base, fontWeight: typography.weights.bold, color: colors.white },
    saveBtnTextDone: { color: colors.success },
  });
}

export default function DashboardScreen() {
  const { saveAnalysis, savedItems } = useSaved();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [photoUri, setPhotoUri] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisError, setAnalysisError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const clearPhoto = () => {
    setPhotoUri(null);
    setAnalysisResult(null);
    setAnalysisError(null);
    setIsSaved(false);
  };

  const clearAnalysis = () => {
    setAnalysisResult(null);
    setAnalysisError(null);
    setIsSaved(false);
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Camera access is required to take photos.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.9,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      setAnalysisResult(null);
      setAnalysisError(null);
      setIsSaved(false);
    }
  };

  const handleUploadPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Gallery access is required to upload photos.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.9,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      setAnalysisResult(null);
      setAnalysisError(null);
      setIsSaved(false);
    }
  };

  const handleAnalyze = async () => {
    if (!photoUri || isAnalyzing) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setAnalysisError(null);
    setIsSaved(false);
    try {
      const result = await analyzeMathImage(photoUri);
      setAnalysisResult(result);
    } catch (err) {
      setAnalysisError(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSave = () => {
    if (!photoUri || !analysisResult || isSaved) return;
    saveAnalysis(photoUri, analysisResult);
    setIsSaved(true);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Header ── */}
        <View style={styles.hero}>
          <View>
            <Text style={styles.heroTitle}>Math Helper</Text>
            <Text style={styles.heroSub}>Scan homework · Get step-by-step solutions</Text>
          </View>
          {savedItems.length > 0 && (
            <View style={styles.savedBadge}>
              <Text style={styles.savedBadgeText}>🔖 {savedItems.length}</Text>
            </View>
          )}
        </View>

        {/* ── Photo Helper ── */}
        <View style={[styles.card, shadows.sm]}>
          <Text style={styles.cardTitle}>Photo Helper</Text>
          <Text style={styles.cardSub}>
            Snap or upload your homework — AI solves and explains every problem
          </Text>

          <View style={styles.photoButtons}>
            <TouchableOpacity
              style={styles.photoBtn}
              onPress={handleTakePhoto}
              activeOpacity={0.8}
              disabled={isAnalyzing}
            >
              <Text style={styles.photoBtnIcon}>📷</Text>
              <Text style={styles.photoBtnText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.photoBtn, styles.photoBtnAlt]}
              onPress={handleUploadPhoto}
              activeOpacity={0.8}
              disabled={isAnalyzing}
            >
              <Text style={styles.photoBtnIcon}>🖼️</Text>
              <Text style={[styles.photoBtnText, styles.photoBtnTextAlt]}>Upload Photo</Text>
            </TouchableOpacity>
          </View>

          {photoUri && (
            <View style={styles.previewWrap}>
              <Image source={{ uri: photoUri }} style={styles.previewImage} resizeMode="cover" />
              <View style={styles.previewActions}>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={clearPhoto}
                  activeOpacity={0.75}
                  disabled={isAnalyzing}
                >
                  <Text style={styles.removeBtnText}>✕  Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {photoUri && !isAnalyzing && (
            <TouchableOpacity style={styles.analyzeBtn} onPress={handleAnalyze} activeOpacity={0.85}>
              <Text style={styles.analyzeBtnText}>
                {analysisResult ? '↺  Re-analyze' : '✦  Analyze Homework'}
              </Text>
            </TouchableOpacity>
          )}

          {isAnalyzing && (
            <View style={styles.analyzingWrap}>
              <ActivityIndicator size="small" color={colors.primary} />
              <Text style={styles.analyzingText}>Reading your homework…</Text>
            </View>
          )}
        </View>

        {/* ── Analysis Results ── */}
        {(analysisResult || analysisError) && (
          <View style={[styles.card, styles.resultsCard, shadows.md]}>
            <View style={styles.resultsHeader}>
              <Text style={[styles.cardTitle, styles.resultsTitle]}>
                {analysisError ? '⚠️  Error' : '✦  Solution Breakdown'}
              </Text>
              <TouchableOpacity onPress={clearAnalysis} style={styles.clearBtn}>
                <Text style={styles.clearBtnText}>Clear</Text>
              </TouchableOpacity>
            </View>

            {analysisError ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{analysisError}</Text>
              </View>
            ) : (
              <>
                <Text style={styles.resultsText}>{analysisResult}</Text>
                <TouchableOpacity
                  style={[styles.saveBtn, isSaved && styles.saveBtnDone]}
                  onPress={handleSave}
                  disabled={isSaved}
                  activeOpacity={0.85}
                >
                  <Text style={[styles.saveBtnText, isSaved && styles.saveBtnTextDone]}>
                    {isSaved ? '✓  Saved to Saved tab' : '🔖  Save to Saved'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}
