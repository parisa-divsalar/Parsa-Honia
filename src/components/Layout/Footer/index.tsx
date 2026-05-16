import { Box, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';

import classes from '@/components/Layout/Footer/footer.module.css';

import CopyRightBox from '@/components/Layout/Footer/CopyRight';
import AppImage from '@/components/ui/AppImage';

const Footer = () => {
  return (
    <Stack width='100%' bgcolor='background.mainLight'>
      <Container maxWidth='xl'>
        <Stack
          sx={{ borderColor: 'fundamental.border' }}
          borderBottom='1px solid'
          className={classes.footer}
          p={{ lg: 5 }}
        >
          <Grid mt={{ xs: 2, lg: 0 }}>
            <Link href='/'>
              <AppImage
                width={170}
                height={61}
                src='/images/logo/logo.png'
                alt='لوگو سایت'
                priority
              />
            </Link>
            <Typography variant='subtitle2' color='white'>
              "خدمات حرفه‌ای، کیفیت فراموش‌نشدنی!"
            </Typography>
          </Grid>

          <Grid>
            <Typography mt={{ xs: 2, lg: 0 }} mb={{ lg: 2 }} variant='subtitle1' color='white'>
              خدمات
            </Typography>
            <Typography variant='subtitle2' mt={2} color='white'>
              تست{' '}
            </Typography>
            <Typography mt={1} variant='subtitle2' color='white'>
              تست{' '}
            </Typography>
            <Typography mt={1} variant='subtitle2' color='white'>
              تست{' '}
            </Typography>
            <Typography mt={1} variant='subtitle2' color='white'>
              تست{' '}
            </Typography>
          </Grid>

          <Grid>
            <Typography mt={{ xs: 2, lg: 0 }} mb={{ lg: 2 }} variant='subtitle1' color='white'>
              لینک‌ها
            </Typography>
            <Link href='/blog'>
              <Typography mt={2} variant='subtitle2' color='white'>
                بلاگ
              </Typography>
            </Link>
            <Typography mt={1} variant='subtitle2' color='white'>
              محصولات
            </Typography>
            <Link href='/about'>
              <Typography mt={1} variant='subtitle2' color='white'>
                درباره ما
              </Typography>
            </Link>
            <Link href='/contact'>
              <Typography mt={1} variant='subtitle2' color='white'>
                تماس با ما
              </Typography>
            </Link>
          </Grid>
          <Grid>
            <Typography mt={{ xs: 2, lg: 0 }} mb={{ lg: 2 }} variant='subtitle1' color='white'>
              محصولات
            </Typography>
            {/*<Typography mt={2} variant='subtitle2' color='white'>*/}
            {/*  هلثی*/}
            {/*</Typography>*/}

            <Link href='#'>
              <Typography mt={1} variant='subtitle2' color='white'>
                تست{' '}
              </Typography>
            </Link>
            <Link href='#'>
              <Typography mt={1} variant='subtitle2' color='white'>
                تست{' '}
              </Typography>
            </Link>
          </Grid>
          <Grid>
            <Typography mt={{ xs: 2, lg: 0 }} mb={{ lg: 2 }} variant='subtitle1' color='white'>
              تماس با ما
            </Typography>
            <Typography mt={3} variant='subtitle2' color='white'>
              تلفن : 22222222-۰۲۱{' '}
            </Typography>
            <Typography mt={3} variant='subtitle2' color='white'>
              ایمیل : info@parsa.com
            </Typography>
            <Typography mt={3} variant='subtitle2' color='white'>
              آدرس : تهران، کوچه دهم ، پلاک ۱، واحد ۱۰
            </Typography>
            <Stack direction='row' mt={4}>
              <Link href='#'>
                <AppImage src='/images/icon/x.png' title='' width={22} height={22} />
              </Link>
              <Link href='#'>
                <Box mr={3}>
                  <AppImage src='/images/icon/what.png' title='' width={22} height={22} />
                </Box>
              </Link>
              <Link href='#'>
                <Box mr={3}>
                  <AppImage src='/images/icon/insta.png' title='' width={22} height={22} />
                </Box>
              </Link>
              <Link href='#'>
                <Box mr={3}>
                  <AppImage src='/images/icon/tel.png' title='' width={22} height={22} />
                </Box>
              </Link>
            </Stack>
          </Grid>
        </Stack>
      </Container>
      <CopyRightBox />
    </Stack>
  );
};

export default Footer;
