export const LIGHT_COLORS = {
  primary: '#6C63FF',
  primaryLight: '#EEF0FF',
  primaryDark: '#4B44CC',
  accent: '#FF6584',
  accentLight: '#FFF0F3',
  success: '#43C59E',
  successLight: '#E8FAF5',
  warning: '#FFBE0B',
  warningLight: '#FFF8E1',
  error: '#FF5252',
  errorLight: '#FFEBEB',

  background: '#F8F9FF',
  surface: '#FFFFFF',
  surfaceAlt: '#F2F3FF',

  text: '#1A1A2E',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  border: '#E5E7EB',
  divider: '#F3F4F6',

  white: '#FFFFFF',
  black: '#000000',

  gradientPurple: ['#6C63FF', '#9B93FF'],
  gradientBlue: ['#4FACFE', '#00F2FE'],
  gradientGreen: ['#43C59E', '#38B2AC'],
  gradientOrange: ['#FA8231', '#FFBE0B'],
};

export const DARK_COLORS = {
  primary: '#6C63FF',
  primaryLight: '#2A2850',
  primaryDark: '#4B44CC',
  accent: '#FF6584',
  accentLight: '#3D1A25',
  success: '#43C59E',
  successLight: '#1A3D30',
  warning: '#FFBE0B',
  warningLight: '#3D300A',
  error: '#FF5252',
  errorLight: '#3D1515',

  background: '#0D0D1A',
  surface: '#16162A',
  surfaceAlt: '#1E1E35',

  text: '#F0F0FF',
  textSecondary: '#9090B0',
  textMuted: '#5A5A7A',
  border: '#2A2A45',
  divider: '#1E1E35',

  white: '#FFFFFF',
  black: '#000000',

  gradientPurple: ['#6C63FF', '#9B93FF'],
  gradientBlue: ['#4FACFE', '#00F2FE'],
  gradientGreen: ['#43C59E', '#38B2AC'],
  gradientOrange: ['#FA8231', '#FFBE0B'],
};

// Default light export kept for any direct import that doesn't need theming
export const colors = LIGHT_COLORS;

export const typography = {
  sizes: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    xxl: 30,
    xxxl: 36,
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  md: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
};
