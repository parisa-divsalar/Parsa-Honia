'use client';
import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';

import AppImage from '@/components/ui/AppImage';

const Customers = () => {
  const theme = useSelector((state: any) => state.common.theme);
  return (
    <Stack bgcolor='background.slideCustomer' mt={7}>
      <Container maxWidth='xl'>
        <Grid container my={{ xs: 2, lg: 5 }} textAlign='center'>
          <Typography
            mb={5}
            textAlign='center'
            variant='h4'
            color='text.primary'
            mt={1}
            width='100%'
          >
            مشتریان ما
          </Typography>
          <Stack
            direction='row'
            gap={5}
            overflow='auto'
            width='100%'
            justifyContent='space-between'
            my={1}
          >
            {theme === 'dark' ? (
              <>
                <AppImage src='/images/customers/b3.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/b1.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/b1.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/b1.png' title='' width={150} height={80} />
              </>
            ) : (
              <>
                <AppImage src='/images/customers/c1.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/c4.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/c4.png' title='' width={150} height={80} />
                <AppImage src='/images/customers/c4.png' title='' width={150} height={80} />
              </>
            )}
          </Stack>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Customers;
