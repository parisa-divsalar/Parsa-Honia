'use client';

import Link from 'next/link';

import {usePathname} from 'next/navigation';
import {Typography, useMediaQuery} from '@mui/material';
import type { Theme } from '@mui/material/styles';
import {FunctionComponent} from 'react';
import classes from '@/components/Layout/Header/NavLink/navlink.module.css';
interface NavLinkProps {
	label: string;
	link: string;
}

const NavLink: FunctionComponent<NavLinkProps> = (props) => {
	const {label = '', link = ''} = props;
	const pathName = usePathname();
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<Link href={link} style={{textDecoration: 'none'}}>
			<Typography className={classes.navlink} sx={{borderColor: 'fundamental.border' , padding:"10px 0"}}
 						color={pathName === link ? 'primary.main' :!isMobile ? 'white' : 'natural.natural900'}>{label}</Typography>
		</Link>
	);
};

export default NavLink;
