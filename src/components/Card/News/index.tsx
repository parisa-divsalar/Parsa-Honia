import {Typography, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import Link from "next/link";
import React, { FunctionComponent } from 'react';

import classes from '@/components/Card/News/News.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomBadge from '@/components/ui/Badge';

import {NewsItem} from "@/types/newsItem";

interface NewsCardProps {
  newsItem: NewsItem;
  col: boolean;
}
const NewsCard: FunctionComponent<NewsCardProps> = (props) => {
  const { newsItem , col } = props;
  const { des, title, img, time } = newsItem;
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack width='100%'>
	 <Link href='/blog/1'>
		 <Grid gap={{lg:4}}  className={!col ? classes.section_item : ""} width='100%'>
			 <Stack  className={classes.section_item_image} width={!col ? isMobile ? "100%" :"818px" : isMobile ? "100%" :"684px"} height="200px" position="relative" mb={1}>
				 <AppImage  src={img} title='' layout='fill' objectFit='cover' />
			 </Stack>
			 <Grid className={classes.section_item_text}>
				 <Typography textAlign='start' variant='subtitle2' color='text.primary' mt={1}>
					 {time}
				 </Typography>
				 <Typography textAlign='start' variant='subtitle1' color='text.primary' mt={1}>
					 {title}
				 </Typography>
				 <Typography  textAlign='start' variant='subtitle2' color='text.secondary' mt={1}>
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

export default NewsCard;
