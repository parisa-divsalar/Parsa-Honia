'use client';

import { Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent } from 'react';

import classes from '@/components/Layout/Header/NavLink/navlink.module.css';
interface NavLinkProps {
  label: string;
  link: string;
}

const NavLink: FunctionComponent<NavLinkProps> = (props) => {
  const { label = '', link = '' } = props;
  const pathName = usePathname();

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Typography className={`${classes.navlink} ${pathName === link ? classes.active : ''}`}>
        {label}
      </Typography>
    </Link>
  );
};

export default NavLink;
