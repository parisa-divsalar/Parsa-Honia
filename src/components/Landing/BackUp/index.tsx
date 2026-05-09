import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import classes from '@/components/Landing/BackUp/backUp.module.css';

import BackUpCard from '@/components/Card/BackUpCard';
import { BackUpList } from '@/components/Landing/BackUp/data';
import AppImage from '@/components/ui/AppImage';

const BackUpSection = () => {
  return (
    <Grid container bgcolor='background.mainLightCustom' mt={{xs:5 , lg:10}}>
      <Container maxWidth='xl'>
        <Stack pb={{lg:15}} textAlign='center'>
          <Grid width={{xs:'100%' ,lg:'57%'}} marginX='auto' mb={{lg:5}} mt={{xs:3 ,lg:10}}>
            <Typography
              pb={{xs:3 ,lg:10}}
              textAlign='center'
              variant='h4'
              color='text.primary'
              mt={1}
              width='100%'
            >
              در دنیایی که پر از "تولیدکننده راه‌حل" است، ما آمده‌ایم تا هم‌فکر، همراه و هم‌راستا با شما باشیم.   </Typography>
          </Grid>
          <Grid className={classes.backUp}>
            {BackUpList.map((item, index) => (
              <BackUpCard
                key={`backup_${index}`}
                des={item.des}
                img={item.img}
                title={item.title}
              />
            ))}
            <Grid className={classes.back_image} width='35%' mt={1} ml={2}>
              <AppImage src='/images/circle.png' title='' width={799} height={358} />
            </Grid>
            <Grid className={classes.back_image_two} width='35%' mt={1} ml={2}>
              <AppImage src='/images/circle.png' title='' width={799} height={358} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default BackUpSection;
