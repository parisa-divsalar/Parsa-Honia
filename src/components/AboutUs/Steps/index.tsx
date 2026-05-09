import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import classes from '@/components/Landing/Steps/steps.module.css';

import AppImage from '@/components/ui/AppImage';

const ServiceSection = () => {
  return (
	<Stack mt={10} py={10} bgcolor='background.slideCustomer'>
		<Container maxWidth='xl'>
			<Stack  textAlign='center' >
				<Grid className={classes.steps} direction='row'>
					<Stack ml={10} direction='row' justifyContent='start'>
						<AppImage src='/images/step-1.png' title='' width={628} height={326} />
					</Stack>
					<Grid>
						<Typography textAlign='start' variant='subtitle1' color='text.primary' mt={3}>
							ماموریت ما
						</Typography>
						<Typography textAlign='start' variant='h6' color='text.primary' mt={3}>
							الهام‌بخشی، نوآوری، اشتراک‌گذاری
						</Typography>
						<Typography
							mb={5}
							textAlign='justify'
							variant='subtitle1'
							color='text.opacity'
							mt={3}
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
							گرافیک است. این متن برای آزمایش چیدمان و نمایش متون در طراحی‌ها به کار می‌رود. هدف آن
							ایجاد نمونه‌ای از متن است که خوانایی و ظاهر طبیعی داشته باشد. هدف آن ایجاد نمونه‌ای از
							متن است که خوانایی و ظاهر طبیعی داشته باشد. هدف آن ایجاد نمونه‌ای از متن است که
							خوانایی و ظاهر طبیعی داشته باشد.
						</Typography>
					</Grid>
				</Grid>
				<Grid className={classes.steps} direction='row' mt={10}>
					<Grid ml={10}>
						<Typography textAlign='start' variant='subtitle1' color='text.primary' mt={3}>
							ماموریت ما
						</Typography>
						<Typography textAlign='start' variant='h6' color='text.primary' mt={3}>
							تفکر، طراحی، تحقق
						</Typography>
						<Typography
							textAlign='justify'
							variant='subtitle1'
							color='text.opacity'
							mt={1}
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
							گرافیک است. این متن برای آزمایش چیدمان و نمایش متون در طراحی‌ها به کار می‌رود. هدف آن
							ایجاد نمونه‌ای از متن است که خوانایی و ظاهر طبیعی داشته باشد. هدف آن ایجاد نمونه‌ای از
							متن است که خوانایی و ظاهر طبیعی داشته باشد. هدف آن ایجاد نمونه‌ای از متن است که
							خوانایی و ظاهر طبیعی داشته باشد.
						</Typography>
					</Grid>

					<Stack direction='row' justifyContent='end'>
						<AppImage src='/images/step-2.png' title='' width={628} height={326} />
					</Stack>
				</Grid>
			</Stack>
		</Container>
	</Stack>
  );
};

export default ServiceSection;
