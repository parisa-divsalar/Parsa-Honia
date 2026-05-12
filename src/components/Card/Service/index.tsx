import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import React, { FunctionComponent } from 'react';

import classes from '@/components/Landing/Service/service.module.css';

import AppImage from '@/components/ui/AppImage';

import { ServiceItem } from '@/types/service';

interface ServiceCardProps {
  serviceItem: ServiceItem;
}
const ServiceCard: FunctionComponent<ServiceCardProps> = (props) => {
  const { serviceItem } = props;
  const { des, title, img,text } = serviceItem;

  return (
    <Stack>
      <Grid className={classes.section_item} width='100%' p={{lg:4}}>
        <Grid>
          <AppImage src={img} title='' width={64} height={64} />
        </Grid>
        <Grid className={classes.section_item_text}>
          <Typography variant='subtitle1' color='text.primary' mt={1}>
            {title}
          </Typography>
          {/*<Typography variant='subtitle2' color='text.secondary' mt={1} width='95%'>*/}
          {/*  {text}*/}
          {/*</Typography>*/}
          <Typography variant='subtitle2' color='text.secondary' mt={1} width='95%'>
            {des}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ServiceCard;
