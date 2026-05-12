import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import classes from '@/components/Landing/Steps/steps.module.css';

import AppImage from '@/components/ui/AppImage';

const ServiceSection = () => {
  return (
    <Container maxWidth='xl'>
      <Stack mt={{lg:20}} textAlign='center'>
        <Grid className={`${classes.steps} ${classes.steps_reverse}`} direction='row'>
          <Stack ml={10} position='relative' direction='row' justifyContent='start' width={{xs:'100%' ,lg:1500}} height={{xs:200 ,lg:326}}>
            <AppImage src='/images/step-1.png' title=''  layout='fill' />
          </Stack>
          <Grid>
            <Typography textAlign={{sm:"center",lg:'start'}} variant='subtitle1' color='text.primary' mt={{xs:5 , lg:1}}>
                تجربه             </Typography>

            <Typography textAlign={{sm:"center",lg:'start'}} variant='h5' color='text.primary' mt={{xs:1 ,lg:3}}>
              الهام‌بخشی، نوآوری، اشتراک‌گذاریدانش فنی سطح بالا در حوزه نیروگاه خورشیدی         </Typography>
            <Typography mb={{xs:3 , lg:5}} textAlign='justify' variant='subtitle1' color='text.opacity' mt={{xs:1 ,lg:3}}>
                صنعت نیروگاه خورشیدی در دنیا صنعت جدیدی محسوب می شود. دانش فنی این حوزه نیز در رده فناوریهای پیشرفته قرار دارد
                و نیز بهره مندی از دانش و تجربه ی اساتید برجسته‌ی دانشگاه و برگزاری جلسات متعدد با این اساتید توانست در سریع ترین زمان ممکن دانش فنی صنعت نیروگاه خورشیدی را کسب کند.            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.steps} direction='row' mt={{xs:2 ,lg:10}}>
          <Grid ml={{lg:10}}>
            <Typography textAlign={{sm:"center",lg:'start'}} variant='subtitle1' color='text.primary' mt={1}>
                تامین بی واسطه            </Typography>
            <Typography textAlign={{sm:"center",lg:'start'}} variant='h4' color='text.primary' mt={{xs:1 ,lg:3}}>
                تجهیزات نیروگاه خورشیدی            </Typography>

            <Typography mb={{xs:3 , lg:5}} textAlign='justify' variant='subtitle1' color='text.opacity' mt={{xs:1 ,lg:3}}>
                بخشی از تجهیزات و قطعات مورد نیاز نیروگاه خورشیدی در داخل تولید می شود و بخشی دیگر از کشورهای اروپایی وارد می شود.
                ضایت کامل داشته باشند و اغلب کارفرمایان پس از پایان یک پروژه، طراحی و ساخت نیروگاه های دیگری را به این شرکت واگذار کرده اند.            </Typography>
          </Grid>

          <Stack position='relative' direction='row' justifyContent='end' width={{xs:'100%' ,lg:1200}} height={{xs:200 ,lg:326}}>
            <AppImage src='/images/step-2.png' title=''  layout='fill' />
          </Stack>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ServiceSection;
