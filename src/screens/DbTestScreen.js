import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { typography } from '../theme/colors';
import { isSupabaseEnabled } from '../services/supabaseClient';
import {
  listSavedScans,
  createSavedScan,
  deleteSavedScan,
} from '../services/savedScansService';

// A small screen to smoke-test the Supabase/Postgres backend end to end:
// it reads, inserts and deletes rows in the `saved_scans` table.
export default function DbTestScreen() {
  const { colors } = useTheme();
  const [rows, setRows] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const refresh = useCallback(async () => {
    if (!isSupabaseEnabled) {
      setError('Supabase no configurado (faltan EXPO_PUBLIC_SUPABASE_*).');
      setStatus('disabled');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await listSavedScans();
      setRows(data);
      setStatus('connected');
    } catch (e) {
      setError(e.message || String(e));
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const onAdd = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    try {
      await createSavedScan({
        photoUri: 'https://placehold.co/120x120?text=DB+Test',
        analysisText: text.trim(),
      });
      setText('');
      await refresh();
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteSavedScan(id);
      await refresh();
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  const statusColor =
    status === 'connected'
      ? colors.success
      : status === 'error' || status === 'disabled'
      ? colors.error
      : colors.textMuted;

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: colors.text }]}>DB Test</Text>
      <View style={styles.statusRow}>
        <View style={[styles.dot, { backgroundColor: statusColor }]} />
        <Text style={[styles.statusText, { color: colors.textSecondary }]}>
          {status === 'connected' && `Conectado · ${rows.length} fila(s)`}
          {status === 'error' && 'Error de conexión'}
          {status === 'disabled' && 'Supabase deshabilitado'}
          {status === 'idle' && 'Conectando…'}
        </Text>
        <TouchableOpacity onPress={refresh} style={styles.refresh}>
          <Text style={{ color: colors.primary, fontWeight: '600' }}>↻ Refrescar</Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <View style={[styles.errorBox, { backgroundColor: colors.errorLight }]}>
          <Text style={{ color: colors.error }}>{error}</Text>
        </View>
      ) : null}

      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Insertar fila en saved_scans
        </Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="analysis_text…"
          placeholderTextColor={colors.textMuted}
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border, backgroundColor: colors.surfaceAlt },
          ]}
        />
        <TouchableOpacity
          onPress={onAdd}
          disabled={loading || !isSupabaseEnabled}
          style={[
            styles.button,
            { backgroundColor: colors.primary, opacity: loading || !isSupabaseEnabled ? 0.5 : 1 },
          ]}
        >
          <Text style={styles.buttonText}>+ Insertar</Text>
        </TouchableOpacity>
      </View>

      {loading ? <ActivityIndicator color={colors.primary} style={{ marginVertical: 12 }} /> : null}

      {rows.map((row) => (
        <View key={row.id} style={[styles.row, { backgroundColor: colors.surface }]}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.rowText, { color: colors.text }]} numberOfLines={2}>
              {row.analysisText}
            </Text>
            <Text style={[styles.rowMeta, { color: colors.textMuted }]}>
              {new Date(row.savedAt).toLocaleString()} · {row.id.slice(0, 8)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onDelete(row.id)} style={styles.del}>
            <Text style={{ color: colors.error, fontWeight: '700' }}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      {!loading && rows.length === 0 && status === 'connected' ? (
        <Text style={[styles.empty, { color: colors.textMuted }]}>
          Sin filas todavía. Inserta una arriba.
        </Text>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 60, paddingBottom: 100 },
  title: { fontSize: typography.sizes.xxl, fontWeight: typography.weights.extrabold, marginBottom: 8 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  statusText: { fontSize: typography.sizes.sm, flex: 1 },
  refresh: { paddingHorizontal: 8, paddingVertical: 4 },
  errorBox: { padding: 12, borderRadius: 12, marginBottom: 12 },
  card: { padding: 16, borderRadius: 16, marginBottom: 16 },
  label: { fontSize: typography.sizes.sm, marginBottom: 8, fontWeight: typography.weights.semibold },
  input: { borderWidth: 1, borderRadius: 12, padding: 12, fontSize: typography.sizes.base, marginBottom: 12 },
  button: { paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: typography.weights.bold, fontSize: typography.sizes.base },
  row: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 14, marginBottom: 10 },
  rowText: { fontSize: typography.sizes.base, fontWeight: typography.weights.medium },
  rowMeta: { fontSize: typography.sizes.xs, marginTop: 4 },
  del: { paddingHorizontal: 10, paddingVertical: 6 },
  empty: { textAlign: 'center', marginTop: 20, fontSize: typography.sizes.base },
});
