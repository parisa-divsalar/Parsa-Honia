'use client';
import {Container, Link, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';
import {useState} from 'react';

import classes from "@/components/Landing/Hero/Hero.module.css";

import CustomButton from '@/components/ui/CustomButton';

import ScrollTab from "@/app/_component/scrollTab/scrollTab";

const LottieHero = dynamic(() => import('./LottieHero'), { ssr: false });

const HeroSection = () => {
	const [isActive, setIsActive] = useState('project');

	return (
		<Grid bgcolor='background.mainLight'>
			<Container maxWidth='xl'>
				<Grid className={classes.hero_section} container width='100%' py={{xs:2 , lg:15}}>
					<Grid size={{lg: 6}} mt={{xs:2 , lg: 0}} p={{xs:0 , lg:4}}>
						<Typography variant='h4' color='white' textAlign={{xs:'center' ,lg:'right'}}>
                             ارائه کننده خدمات مهندسی، تأمین تجهیزات و اجرا (EPC)
						</Typography>
						<Typography variant='subtitle1' textAlign='justify' color='white' mt={4} width={{lg:'88%'}}>
                            شرکت  پارسا هونیا توانایی ارائه خدمات در کلیه مراحل تولید برق خورشیدی را دارد؛ مطالعات اولیه و امکان سنجی پروژه های نیروگاه خورشیدی، طراحی و مهندسی نیروگاه، خرید پنل خورشیدی و سایر تجهیزات، ساخت، نصب، راه اندازی، بهره برداری، تعمیرات و نگهداری (O&M) مطابق نیازمندی های کارفرما و براساس مشخصات مورد نیاز پروژه قابل انجام می باشد.
						</Typography>

						<Typography variant='subtitle1' textAlign='justify' color='white' mt={1} width={{lg:'88%'}}>
                            و تولید همزمان برق و بخار CHP و پروژه های تولید برق خورشیدی Solar PV Plant فعالیت درخشانی داشته است.						</Typography>

						<Stack direction='row' mb={{xs:1 , lg:0}} mt={{xs:3 ,lg:6}} gap={2}>

								<ScrollTab
									onClick={(id) => setIsActive(id)}
									title="خدمات"
									id="project"/>
									<CustomButton color='inherit' variant='info'>
										<Link href='#'>
											<Typography color='primary.main'>درباره ما </Typography>
										</Link>
									</CustomButton>
						</Stack>
					</Grid>

					<Grid mx="auto" size={{xs:10 , lg: 6}}>
                        <LottieHero />
                        <Typography color='primary.main' variant='subtitle1'> EPC </Typography>
                    </Grid>

				</Grid>
			</Container>
		</Grid>
	);
};

export default HeroSection;
