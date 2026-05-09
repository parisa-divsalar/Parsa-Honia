import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/system';
import React from 'react';

import classes from '@/components/ui/Badge/badge.module.css';

interface PrimaryBadgeProps {
  text?: string;
}

const CustomBadge = (props: PrimaryBadgeProps) => {
  const { text = '' } = props;

  return (
	  <Stack direction='row'>
		  <Grid  sx={{borderColor:"info.main"}} className={classes.badge} bgcolor='info.A10' mt={2} border={1}>
			  <Typography textAlign='center' variant='caption' color='info.main'>
				  پرزنتیشن
			  </Typography>
		  </Grid>
		  <Grid sx={{borderColor:"warning.main"}}  className={classes.badge} bgcolor='warning.A10' m={2} mt={2} border={1}>
			  <Typography textAlign='center' variant='caption' color='warning.main'>
				  ریسرچ
			  </Typography>
		  </Grid>
		  <Grid sx={{borderColor:"success.main"}}  className={classes.badge} bgcolor='success.A10' mt={2} border={1}>
			  <Typography textAlign='center' variant='caption' color='success.main'>
				  دیزاین
			  </Typography>
		  </Grid>
	  </Stack>
  );
};

export default CustomBadge;
