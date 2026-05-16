import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import classes from '@/components/Landing/CustomizeServices/CustomizeServices.module.css';

import CustomizeServicesCard from '@/components/Card/CustomizeServices';
import { CustomizeServicesList } from '@/components/Landing/CustomizeServices/data';
import AppImage from '@/components/ui/AppImage';

const CustomizeServicesSection = () => {
  return (
    <Container maxWidth='xl'>
      <Stack
        className={classes.customizeServices_section}
        mt={{ xs: 5, lg: 15 }}
        textAlign='center'
      >
        <Typography textAlign='center' variant='h4' color='text.primary' mt={1} width='100%'>
          پروژه های پارسا هونیا{' '}
        </Typography>
        <Typography
          mb={{ lg: 5 }}
          textAlign='center'
          variant='subtitle1'
          color='text.secondary'
          mt={2}
          width='100%'
        >
          شرکت پارسا هونیا طراح و مجری بیش از 80 مگاوات نیروگاه گازی و تولید همزمان برق و حرارت می
          باشد. لیست برخی از پروژه ها در ادامه آورده شده است:
        </Typography>
        <Stack
          direction='row'
          justifyContent='space-between'
          className={classes.customizeServices_gap}
        >
          <Grid container className={classes.customizeServices}>
            {CustomizeServicesList.map((item, index) => (
              <Grid size={{ xs: 4 }} key={`custom_${index}`} mt={1}>
                <CustomizeServicesCard des={item.des} img={item.img} title={item.title} />
              </Grid>
            ))}
          </Grid>
          <Stack
            mt={{ xs: 2, lg: 0 }}
            ml={2}
            position='relative'
            direction='row'
            width={{ xs: '100%', lg: 609 }}
            height={{ xs: 200, lg: 423 }}
          >
            <AppImage src='/images/CustomizeServices.png' title='' layout='fill' />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CustomizeServicesSection;
