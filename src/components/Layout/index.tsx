import React from 'react';
import { Stack } from '@mui/material';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack height='100%' width='100%' bgcolor='background.main' className='main-layout'>
      <Header />

      <Stack width='100%' flexGrow={1} mt={{xs:7 ,lg:8}}>
        {children}
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Layout;
