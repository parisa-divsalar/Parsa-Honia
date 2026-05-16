import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/system';
import React from 'react';

import classes from '@/components/Landing/CustomizeServices/CustomizeServices.module.css';

import AppImage from '@/components/ui/AppImage';

const CustomizeServicesCard = ({
  title,
  des,
  img,
}: {
  title: string;
  des: string;
  img: string;
}) => {
  // @ts-ignore
  return (
    <Grid className={classes.customizeServices_item} direction='row' mt={2} width='100%'>
      <Stack
        ml={{ lg: 2 }}
        position='relative'
        direction='row'
        width={{ xs: 70, lg: 64 }}
        height={{ xs: 48, lg: 64 }}
      >
        <AppImage src={img} title='' layout='fill' />
      </Stack>
      <Grid className={classes.customizeServices_item_text}>
        <Typography variant='subtitle1' mt={0.5} color='text.primary'>
          {title}
        </Typography>
        <Typography
          // @ts-ignore
          variant='subtitle3'
          color='text.secondary'
          mt={1}
          width='100%'
        >
          {des}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CustomizeServicesCard;
