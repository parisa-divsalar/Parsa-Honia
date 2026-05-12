import {Container, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from "react";

import classes from '@/components/Blog/LastPost/blog.module.css';

import {LastPostList} from "@/components/Blog/LastPost/data";
import LastPostCard from "@/components/Card/LastPost";

import {LastPostItem} from "@/types/lastPost";


const LastPostSection = () => {
  return (
	<Stack bgcolor='fundamental.Section'>
		<Container maxWidth='xl'>
			<Stack  mt={{lg:4}} textAlign='center'>
				<Typography textAlign={{xs:'center' ,lg:'start'}} variant='subtitle1' color='text.primary' my={{xs:3 , lg:1}}>

					پست های اخیر
				</Typography>
				<Grid className={classes.section}>
					{LastPostList.map((item: LastPostItem) => (
						<Grid size={{ xs: 4 }} key={item.id}>
							<LastPostCard lastPostItem={item} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Container>
	</Stack>
  );
};

export default LastPostSection;
