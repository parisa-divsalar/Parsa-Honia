'use client';

import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/common/commonSlice';
import { themeSelector } from '@/store/common/commonSelector';

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
