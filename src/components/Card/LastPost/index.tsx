'use client';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import classes from '@/components/Card/LastPost/lastPost.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomBadge from '@/components/ui/Badge';

import { LastPostItem } from '@/types/lastPost';

interface LastPostCardProps {
  lastPostItem: LastPostItem;
}

const LastPostCard: FunctionComponent<LastPostCardProps> = (props) => {
  const { lastPostItem } = props;
  const { des, title, img, time } = lastPostItem;
  const theme = useSelector((state: any) => state.common.theme);
  return (
    <Stack>
      <Link href='/blog/1'>
        <Grid className={classes.section_item} width='100%' p={{ lg: 4 }}>
          <Stack
            className={classes.section_item_image}
            width={{ xs: '100%', lg: '420px' }}
            height={{ xs: '200px', lg: '240px' }}
            position='relative'
          >
            <AppImage src={img} title='' layout='fill' objectFit='cover' />
          </Stack>
          <Grid className={classes.section_item_text}>
            <Typography textAlign='start' variant='subtitle1' color='text.primary' mt={1}>
              {time}
            </Typography>
            <Typography
              position='relative'
              textAlign='start'
              variant='subtitle1'
              color='text.primary'
              mt={1}
            >
              {title}
              <Stack position='absolute' left={{ xs: 0, lg: '-40px' }} top='1px'>
                <AppImage
                  src={`/images/blog/Icon-wrap${theme === 'dark' ? '' : '-b'}.png`}
                  title=''
                  width={24}
                  height={24}
                />
              </Stack>
            </Typography>
            <Typography textAlign='start' variant='subtitle2' color='text.secondary' mt={1}>
              {des}
            </Typography>
            <Grid>
              <CustomBadge />
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </Stack>
  );
};

export default LastPostCard;
