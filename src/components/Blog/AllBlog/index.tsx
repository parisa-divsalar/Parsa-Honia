'use client';

import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';

import classes from '@/components/Blog/AllBlog/blog.module.css';

import { AllBlogList } from '@/components/Blog/AllBlog/data';
import AllBlogCard from '@/components/Card/AllBlog';
import CustomButton from '@/components/ui/CustomButton';

import { AllBlogItem } from '@/types/allBlogItem';

const AllBlogSection = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <Container maxWidth='xl'>
      <Stack mt={4} textAlign='center'>
        <Typography textAlign='center' variant='h6' color='text.primary' mt={{ lg: 3 }}>
          بلاگ‌ها
        </Typography>
        <Typography
          variant='subtitle1'
          textAlign={{ xs: 'justify', lg: 'center' }}
          className={classes.aboutText}
          color='text.primary'
          mt={3}
        >
          خدمات جامع در زمینه کامپیوتر، نرم‌افزار و سخت‌افزار را با بالاترین سطح کیفیت به مشتریان
          ارائه می‌دهد. این شرکت با به‌کارگیری جدیدترین فناوری‌ها و ارائه راهکارهای نوین{' '}
        </Typography>

        <Stack
          mt={{ xs: 2, lg: 0 }}
          mb={{ xs: 4, lg: 7 }}
          gap={1}
          direction='row'
          justifyContent='center'
        >
          {['همه', 'هوش ', 'کریپتو', 'تحصیل', 'کد ', 'دیزاین'].map((label) => (
            <CustomButton
              key={label}
              size='small'
              minWidth={true}
              //@ts-ignore
              variant={activeButton === label ? 'info' : 'outlined'}
              onClick={() => handleButtonClick(label)}
            >
              <Typography color={activeButton === label ? '#E30613' : 'text.primary'}>
                {label}
              </Typography>
            </CustomButton>
          ))}
        </Stack>
        <Grid className={classes.section_big}>
          <AllBlogCard bigCard={true} allBlogItem={AllBlogList[0]} />
          <AllBlogCard bigCard={true} allBlogItem={AllBlogList[1]} />
        </Grid>
        <Grid className={classes.section} mt={{ xs: 2, lg: 3 }}>
          {AllBlogList.slice(2).map((item: AllBlogItem) => (
            <Grid key={item.id}>
              <AllBlogCard bigCard={false} allBlogItem={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default AllBlogSection;
