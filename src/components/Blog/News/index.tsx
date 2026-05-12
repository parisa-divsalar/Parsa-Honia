"use client"

import {Container, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import React, {FunctionComponent} from "react";

import classes from '@/components/Blog/News/blog.module.css';

import {NewsList} from "@/components/Blog/News/data";
import NewsCard from "@/components/Card/News";
import UsePagination from "@/components/ui/Pagination/pagination";


interface PaginationProps {
	pagination:boolean
}

const NewsSection : FunctionComponent<PaginationProps> = (props) => {
	const { pagination } = props;

	return (
    <Container maxWidth='xl'>
      <Stack my={{lg:8}} textAlign='center'>
		  <Typography textAlign={{xs:'center' ,lg:'start'}} variant='subtitle1' color='text.primary' my={2}>
			  هوش مصنوعی
		  </Typography>
        <Grid className={classes.section}>
			<NewsCard col={true} newsItem={NewsList[0]} />
			<Stack width={{lg:'684px'}} gap={4}>
					<NewsCard col={false} newsItem={NewsList[1]} />
					<NewsCard col={false} newsItem={NewsList[2]} />
			</Stack>
        </Grid>
		  {
			  pagination &&
			  <Stack justifyContent='center' width='100%' mt={{lg:10}}>
				  <UsePagination  />
			  </Stack>
		  }

	  </Stack>
    </Container>
  );
};

export default NewsSection;
