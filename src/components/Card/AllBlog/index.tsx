import { Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import Link from "next/link";
import React, { FunctionComponent } from 'react';

import classes from '@/components/Card/AllBlog/allBlog.module.css';

import AppImage from '@/components/ui/AppImage';
import CustomButton from "@/components/ui/CustomButton";

import { AllBlogItem } from "@/types/allBlogItem";

interface AllBlogCardProps {
	allBlogItem: AllBlogItem;
	bigCard: boolean;
}

const AllBlogCard: FunctionComponent<AllBlogCardProps> = (props) => {
	const { allBlogItem, bigCard } = props;
	const { des, title, img, time } = allBlogItem;

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<Stack>
			<Link href={`/blog/${allBlogItem.id}`} aria-label={`Read more about ${title}`}>
				<Stack position='relative' className={classes.section_item}>
					<Stack position='absolute' right='20px' top='20px' sx={{ zIndex: 10 }}>
						<CustomButton color='secondary' variant='success'>
							<Typography color='success.main'>دیزاین</Typography>
						</CustomButton>
					</Stack>
					<Stack width="100%" sx={{
						height: bigCard ? {
							xs: '250px',
							lg: '594px',
						} : {
							xs: '190px',
							lg: '495px',
						}
					}} className={classes.imageContainer}>
						<AppImage objectFit='cover' src={img} title='' layout='fill' />
						<Grid className={classes.gradientOverlay} />
					</Stack>
					<Grid className={classes.section_item_text}>
						<Typography textAlign='start' variant='subtitle2' color='white' mt={1}>
							{time}
						</Typography>
						<Typography position='relative' textAlign='start' variant='subtitle1' color='white' mt={1}>
							{isMobile ? bigCard ? title :title?.slice(0, 15) + '...' : title}

							<Stack position='absolute' left='5px' top='0px' width={{xs:16 ,lg:24}} height={{xs:16 ,lg:24}}>
								<AppImage src='/images/blog/Icon-wrap.png' title=''  layout='fill' />
							</Stack>
						</Typography>
						<Typography textAlign='start' variant='subtitle2' color='white' mt={1}>
							{des}
						</Typography>
					</Grid>
				</Stack>
			</Link>
		</Stack>
	);
};

export default AllBlogCard;
