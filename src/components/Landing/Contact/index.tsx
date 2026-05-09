import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import classes from '@/components/Landing/Contact/contact.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '@/components/ui/CustomInput';

const ContactSection = () => {
  return (
    <Container maxWidth='xl'>
      <Stack mt={{xs:5 , lg:10}} mb={{xs:5,lg:20}} textAlign='center'>
        <Grid className={classes.contact}>
          <Grid
            className={classes.contact_section}
            width='50%'
            bgcolor='background.mainLight'
            px={{xs:2,lg:10}}
            py={{xs:2}}
          >
            <Typography textAlign='start' variant='subtitle1' color='white' mt={1}>
              با ما در تماس باشید
            </Typography>
            <Typography textAlign='start' variant='subtitle2' color='white' mt={2}>
              گفت‌وگو، اولین گام هر همکاری ماندگار است.  ما همیشه آماده شنیدن هستیم — چه ایده‌ای برای ساخت داشته باشید، چه چالشی برای حل.
            </Typography>
            <Stack mt={4} gap={2}>
              <CustomInput dark={true} label='نام و نام خانوادگی' />
              <CustomInput dark={true} label='ایمیل' />
              <CustomInput dark={true} label='شماره تماس' />

              <CustomButton variant='contained'>
                <Typography color='white'>ارسال</Typography>
              </CustomButton>
            </Stack>
          </Grid>
          <Grid className={classes.image} direction='row' justifyContent='start' width={{lg:'50%'}}>
            <AppImage src='/images/contact.png' title='' layout='fill' />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ContactSection;
