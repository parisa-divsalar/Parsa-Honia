'use client';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from '@/components/Layout/Header/header.module.css';

import { HeaderMenuList } from '@/components/Layout/Header/data';
import NavLink from '@/components/Layout/Header/NavLink';
import Theming from '@/components/Layout/Header/Theming';
import AppImage from '@/components/ui/AppImage';
import CustomButton from '@/components/ui/CustomButton';

import { TMenuItem } from '@/types/common';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const theme = useSelector((state: any) => state.common.theme);

  return (
    <Stack direction='row' className={classes.header} bgcolor='background.mainLight'>
      <Link className={classes.header_logo} href='/'>
        <AppImage  width={50} height={50} src='/images/logo/logo.png' alt='لوگو سایت' priority />
      </Link>

      <Stack
        bgcolor={{ xs: 'background.main', lg: 'unset' }}
        className={`${classes.header_menu} ${menu ? classes.open_menu : classes.close_menu}`}
        direction='row'
      >
        <Grid className={`${classes.header_mobile_logo}`}>
          <Link href='/'>
            <AppImage
              width={34}
              height={24}
              src={theme === 'dark' ? '/images/logo/logo.png' : '/images/logo/logo-b.png'}
              alt='لوگو سایت'
              priority
            />
          </Link>
          <Grid onClick={() => setMenu(!menu)}>
            <AppImage
              width={24}
              height={24}
              src={
                theme === 'dark'
                  ? '/images/icon/close-circle.png'
                  : '/images/icon/close-circle-b.png'
              }
              alt='بستن'
              priority
            />
          </Grid>
        </Grid>
        {HeaderMenuList.map((item: TMenuItem, index) => {
          const { id, label, link } = item;
          return <NavLink link={link} label={label} key={id} />;
        })}
      </Stack>
      <button onClick={() => setMenu(!menu)} className={`${classes.header_icon}`}>
        <AppImage
          width={16}
          height={12}
          src={theme === 'dark' ? '/images/icon/iconmeno.png' : '/images/icon/iconmeno.png'}
        />
      </button>
      <Stack direction='row' gap={1}>
        <Theming />
        <Link href='#'>
          <CustomButton variant='contained'>تماس با ما</CustomButton>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;
