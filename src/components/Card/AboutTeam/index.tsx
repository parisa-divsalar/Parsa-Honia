import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/system';
import React, { FunctionComponent } from 'react';

import classes from '@/components/Card/AboutTeam/aboutTeam.module.css';

import AppImage from '@/components/ui/AppImage';

import { AboutTeamItem } from '@/types/aboutTeam';

interface AboutCardProps {
  aboutTeamItem: AboutTeamItem;
}
const AboutTeamCard: FunctionComponent<AboutCardProps> = (props) => {
  const { aboutTeamItem } = props;
  const { img, title, des } = aboutTeamItem;

  return (
    <Stack p={2}>
      <Grid className={classes.about_team}>
        <AppImage src={img} title='' width={200} height={180} />
        <Typography textAlign='justify' variant='subtitle1' color='text.primary' mt={1}>
          {title}
        </Typography>
        <Typography mb={1} textAlign='justify' variant='subtitle2' color='text.secondary' mt={1}>
          {des}
        </Typography>
      </Grid>
    </Stack>
  );
};

export default AboutTeamCard;
