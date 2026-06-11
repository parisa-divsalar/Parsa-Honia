import { Stack } from '@mui/material';
import React from 'react';

import Header from '@/components/Layout/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack height='100%' width='100%' bgcolor='background.main' className='main-layout'>
      <Header />

      <Stack width='100%' flexGrow={1} mt={{ xs: 10, lg: 12 }}>
        {children}
      </Stack>
    </Stack>
  );
};

export default Layout;
