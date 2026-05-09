import { Stack, Typography } from '@mui/material';

const CopyRightBox = () => {
  return (
    <Stack textAlign='center' p={2} mx={{lg:30}}>
       <Typography mt={1} color='white' variant='subtitle1'>
        تمامی حقوق برای پارسا هونیا می باشد.
      </Typography>
    </Stack>
  );
};
export default CopyRightBox;
