'use client';
import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';

import classes from '@/components/Contact/contact.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '@/components/ui/CustomInput';

const ServiceSection = () => {
  const theme = useSelector((state: any) => state.common.theme);

  return (
    <Container maxWidth='xl'>
      <Stack my={{ lg: 10 }} textAlign='center'>
        <Grid className={classes.contact_section_container}>
          <Stack display={{ xs: 'none', lg: 'flex' }} textAlign='center' justifyContent='center'>
            <Typography textAlign='center' variant='h4' color='text.primary' mt={4}>
              تماس با ما
            </Typography>
            <Typography mb={5} textAlign='center' variant='h5' color='text.primary' mt={3}>
              کاربر گرامی فیروزه پارسیان؛ باعث افتخار ماست تا نظرات خود را با ما از طریق این فرم به
              اشتراک بگذارید.
            </Typography>
          </Stack>
          <Grid bgcolor='fundamental.Section' className={classes.contact}>
            <Typography textAlign='start' variant='h5' color='text.primary'>
              فرم تماس با فیروزه پارسیان
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              className={classes.contact_section}
            >
              <Grid className={classes.contact_section_inputs} width={{ lg: '40%' }} mt={2}>
                <Stack gap={{ lg: 1 }} direction={{ lg: 'row' }}>
                  <CustomInput label='نام' />
                  <CustomInput label='نام خانوادگی' />
                </Stack>

                <Stack gap={{ lg: 1 }} direction={{ lg: 'row' }}>
                  <CustomInput label='شماره موبایل' />
                  <CustomInput label='ایمیل' />
                </Stack>
                <CustomInput label='توضیحات' multiline rows={4} />

                <Stack width='50px' mt={1}>
                  <CustomButton color='primary' variant='contained'>
                    <Typography color='white'>ارسال</Typography>
                  </CustomButton>
                </Stack>
              </Grid>
              <Stack
                className={classes.contact_map_section}
                direction='row'
                width={{ lg: '55%' }}
                sx={{ borderColor: 'fundamental.border' }}
                justifyContent='space-between'
              >
                <Stack>
                  <Typography
                    textAlign='start'
                    mt={{ xs: 4, lg: -9 }}
                    mb={{ xs: 2, lg: 0 }}
                    variant='h5'
                    color='text.primary'
                  >
                    راه‌های ارتباطی
                  </Typography>
                  <Grid className={classes.contact_details}>
                    <AppImage
                      src={`/images/contact/phone${theme === 'dark' ? '' : '-d'}.png`}
                      title=''
                      width={36}
                      height={36}
                    />
                    <Stack mr={2} alignItems='start'>
                      <Typography
                        textAlign='start'
                        // @ts-ignore
                        variant='subtitle3'
                        color='text.primary'
                      >
                        تلفن پشتیبانی:
                      </Typography>
                      <Typography
                        mb={3}
                        textAlign='start'
                        // @ts-ignore
                        variant='subtitle3'
                        color='text.primary'
                      >
                        ۰۲۱-۲۲۱۱۲۲۱۱
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid className={classes.contact_details}>
                    <AppImage
                      src={`/images/contact/mail${theme === 'dark' ? '' : '-d'}.png`}
                      title=''
                      width={37}
                      height={32}
                    />
                    <Stack mr={2} alignItems='start'>
                      <Typography
                        textAlign='start'
                        // @ts-ignore
                        variant='subtitle3'
                        color='text.primary'
                      >
                        ایمیل:
                      </Typography>
                      <Typography
                        mb={3}
                        textAlign='start'
                        // @ts-ignore
                        variant='subtitle3'
                        color='text.primary'
                      >
                        info@test.com{' '}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid className={classes.contact_details}>
                    <AppImage
                      src={`/images/contact/location${theme === 'dark' ? '' : '-d'}.png`}
                      title=''
                      width={36}
                      height={36}
                    />
                    <Stack mr={2} alignItems='start'>
                      <Typography
                        textAlign='start'
                        // @ts-ignore
                        variant='subtitle3'
                        red
                        color='text.primary'
                      >
                        دفتر مرکزی تهران:
                      </Typography>
                      <Typography mb={3} textAlign='start' variant='subtitle2' color='text.primary'>
                        قلندری جنوبی ، کوچه دهم ، پلاک ۱
                      </Typography>
                    </Stack>
                  </Grid>
                </Stack>

                <Stack
                  position='relative'
                  direction='row'
                  justifyContent='start'
                  width={{ xs: '100%', lg: 438 }}
                  height={{ xs: 200, lg: 315 }}
                >
                  <AppImage src='/images/contact/map.png' title='' layout='fill' />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ServiceSection;
