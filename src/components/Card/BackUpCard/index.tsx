import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/system';
import React from 'react';

import classes from '@/components/Landing/BackUp/backUp.module.css';

import AppImage from '@/components/ui/AppImage';

const ServiceCard = ({ title, des, img }: { title: string; des: string; img: string }) => {
  // @ts-ignore
  return (
    <Stack
      bgcolor='background.paper'
      direction='row'
      className={classes.backUp_item}
      width='100%'
      p={2}
    >
      <Stack
        mt={1}
        ml={1}
        position='relative'
        direction='row'
        width={{ xs: 170, lg: 60 }}
        height={{ xs: 48, lg: 60 }}
      >
        <AppImage src={img} title='' layout='fill' />
      </Stack>
      <Grid className={classes.backUp_item_text}>
        <Typography variant='subtitle1' color='text.primary'>
          {title}
        </Typography>
        <Typography variant='subtitle2' color='text.primary' mt={1} width='100%'>
          {des}
        </Typography>
      </Grid>
    </Stack>
  );
};

export default ServiceCard;
