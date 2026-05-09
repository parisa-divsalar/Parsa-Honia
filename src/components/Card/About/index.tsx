import { Stack } from '@mui/system';
import React, { FunctionComponent } from 'react';

import classes from '@/components/AboutUs/About/about.module.css';

import AppImage from '@/components/ui/AppImage';

import { AboutItem } from '@/types/about';

interface AboutCardProps {
  aboutItem: AboutItem;
}
const AboutCard: FunctionComponent<AboutCardProps> = (props) => {
  const { aboutItem } = props;
  const { img } = aboutItem;

  return (
    <Stack mt={{lg:1}} className={classes.aboutBoxImage}>
      <AppImage objectFit='cover' src={img} title='' layout='fill' />
    </Stack>
  );
};

export default AboutCard;
