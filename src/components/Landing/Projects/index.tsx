'use client';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';

import classes from '@/components/Landing/Projects/projects.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomButton from '@/components/ui/CustomButton';

const ProjectsSection = () => {
  const theme = useSelector((state: any) => state.common.theme);
  return (
    <Container maxWidth='xl'>
      <Grid id='project' container mt={{ xs: 2, lg: 10 }} mb={{ lg: 5 }} textAlign='center'>
        <Grid width='100%'>
          <Typography
            pb={{ xs: 3, lg: 10 }}
            textAlign='center'
            variant='h4'
            color='natural.natural900'
            mt={3}
            width='100%'
          >
            برای دریافت مشاوره رایگان با ما تماس بگیرید.{' '}
          </Typography>
          <Stack className={classes.projects} bgcolor='fundamental.slide'>
            <Grid>
              <Stack direction='row' justifyContent={{ xs: 'center', lg: 'right' }}>
                <Stack
                  ml={1}
                  position='relative'
                  width={{ xs: 32, lg: 60 }}
                  height={{ xs: 30, lg: 56 }}
                >
                  <AppImage src='/images/robot.png' title='' layout='fill' />
                </Stack>
                <Typography
                  textAlign='start'
                  variant='h3'
                  color='text.primary'
                  mt={1}
                  width={{ lg: '50%' }}
                >
                  مشاوران پارسا هونیا
                </Typography>
              </Stack>
              <Typography
                textAlign='justify'
                variant='subtitle1'
                color='text.primary'
                mt={2}
                width={{ lg: '56%' }}
              >
                تیم پارسا هونیا برای دریافت مشاوره رایگان با ما تماس بگیرید. مشتاقانه پاسخگوی سوالات
                شماست. برای دریافت مشاوره یا پاسخ سوالات خود هم اکنون با ما تماس بگیرید.در زمینه
                ارائه خدمات فنی و مهندسی، تأمین تجهیزات و پیمانکاری در زمینه نیروگاه‌های تجدید پذیر،
                انرژی‌های نو، نیروگاه‌های خورشیدی، نیروگاه‌های بادی و نیروگاه‌های بیوگاز فعالیت
                می‌کند.{' '}
              </Typography>
              <Stack display={{ xs: 'none', lg: 'flex' }} direction='row' mt={4} gap={2}>
                <CustomButton endIcon={<ArrowBackRoundedIcon />}>
                  <a href='https://www.vitocrs.com/'>
                    <Typography color='white' mt={0.2}>
                      اطلاعات بیشتر{' '}
                    </Typography>
                  </a>
                </CustomButton>
              </Stack>
            </Grid>
            <Grid className={classes.projects_img}>
              <Stack position='relative' width={{ xs: 193, lg: 437 }} height={{ xs: 183, lg: 426 }}>
                <AppImage
                  src={`/images/freepik${theme === 'dark' ? '-b' : ''}.png`}
                  title=''
                  layout='fill'
                />
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
