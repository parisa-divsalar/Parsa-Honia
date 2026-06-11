'use client';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { themeSelector } from '@/store/common/commonSelector';
import { setTheme } from '@/store/common/commonSlice';

const Theming = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  return (
    <IconButton onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
      {theme === 'light' ? <DarkModeIcon color='primary' /> : <LightModeIcon color='action' />}
    </IconButton>
  );
};

export default Theming;
