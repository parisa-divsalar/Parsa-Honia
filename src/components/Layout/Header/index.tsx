'use client';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { useState } from 'react';

import classes from '@/components/Layout/Header/header.module.css';

import { HeaderMenuList } from '@/components/Layout/Header/data';
import NavLink from '@/components/Layout/Header/NavLink';

import { TMenuItem } from '@/types/common';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Stack component='header' direction='row' className={classes.header}>
      <Link className={classes.header_logo} href='/'>
        <Box className={classes.logo_mark}>⌃</Box>
        <Typography className={classes.logo_text}>پارس</Typography>
      </Link>

      <Stack className={classes.header_right} direction='row'>
        <Stack
          className={`${classes.header_menu} ${menu ? classes.open_menu : classes.close_menu}`}
          direction='row'
        >
          <Grid className={`${classes.header_mobile_logo}`}>
            <Link href='/'>
              <Typography className={classes.logo_text}>پارس</Typography>
            </Link>
            <Grid className={classes.close_button} onClick={() => setMenu(!menu)}>
              بستن
            </Grid>
          </Grid>
          {HeaderMenuList.map((item: TMenuItem) => {
            const { id, label, link } = item;
            return <NavLink link={link} label={label} key={id} />;
          })}
        </Stack>
        <Stack className={classes.header_actions} direction='row' gap={2.5}>
          <Link href='#search' aria-label='جستجو'>
            <SearchOutlinedIcon />
          </Link>
          <Link href='#planning' aria-label='طرح و برنامه‌ریزی'>
            <DesignServicesOutlinedIcon />
          </Link>
          <Link href='#contact' aria-label='تماس'>
            <ContactPhoneOutlinedIcon />
          </Link>
          <button
            onClick={() => setMenu(!menu)}
            className={`${classes.header_icon}`}
            aria-label='باز کردن منو'
          >
            <MenuOutlinedIcon />
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
