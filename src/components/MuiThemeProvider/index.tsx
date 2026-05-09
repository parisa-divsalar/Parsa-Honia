'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { themeSelector } from '@/store/common/commonSelector';

import { getDesignTokens } from '@/config/theme';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const _theme = useSelector(themeSelector);
  const theme = useMemo(() => createTheme(getDesignTokens(_theme)), [_theme]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
