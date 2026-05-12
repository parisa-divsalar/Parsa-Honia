import {Container, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid'
import React from "react";

import classes from '@/components/AboutUs/About/about.module.css';

import {AboutList} from '@/components/AboutUs/About/data';
import AboutCard from '@/components/Card/About';

import {AboutItem} from '@/types/about';

const ServiceSection = () => {
	return (
		<Stack mt={{xs: 2,lg:5}} textAlign='center'>
			<Grid className={classes.about}>
				<Typography  textAlign='center' variant='h6' color='text.primary' mt={1}>
					درباره ما
				</Typography>
				<Typography
					textAlign='center'
					variant='h6'
					className={classes.aboutText}
					mb={{lg:1}}
					color='text.primary'
					mt={2}
				>
					آینده، فقط اتفاق نمی‌افتد. ساخته می‌شود.
				</Typography>
				<Container maxWidth='xl'>

					<Stack className={classes.about_images} direction='row' mt={{xs: 1,lg:5}} >
						{AboutList.map((item: AboutItem) => (
							<Grid key={item.id}>
								<AboutCard aboutItem={item}/>
							</Grid>
						))}
					</Stack>

					<Typography  textAlign='center' variant='h6' color='text.primary' mt={{xs:3,lg:7}} >
						هر سازمانی یک نقطه آغاز دارد.
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} mb={1} color='text.primary' mt={1}>
						نقطه‌ای که در آن، مجموعه‌ای از تجربه‌ها، دغدغه‌ها و بینش‌ها به یک تصمیم منتهی می‌شوند: ساختن چیزی متفاوت. فیروزه پارسیان از همین نقطه آغاز شد. نه از دل یک موج گذرا، نه با انگیزه‌ی هیجان‌زدگی از تکنولوژی‌های جدید، بلکه با یک باور عمیق: فناوری اگر مسئله‌ای را حل نکند، فقط هزینه است. ما سال‌ها در حوزه‌های مختلف فناوری، در بازارهای داخلی و بین‌المللی فعالیت کرده بودیم. پروژه‌های زیادی دیدیم که ظاهر مدرن داشتند، اما فاقد معنا، عمق و دوام بودند. راهکارهایی که بیشتر برای نمایش ساخته شده بودند تا برای تأثیر. و آن‌جا بود که تصمیم گرفتیم جهت حرکت‌مان را تعریف کنیم.
					</Typography>


					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' mt={{xs: 2,lg:4}} >
						ما چرا هستیم؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} color='text.primary' >

						فیروزه پارسیان برای ساختن چیزی ساده اما ضروری شکل گرفت: فناوری‌هایی که به‌جای پیچیده‌تر کردن مسیر، آن را روشن‌تر کنند.

					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} mb={1} color='text.primary' >

						ما باور داریم تکنولوژی باید در خدمت خلق ارزش باشد — نه صرفاً برای ادای مدرنیته. این نگاه، DNA برند ما را شکل می‌دهد و در تمام پروژه‌هایمان جاری است: از طراحی اپلیکیشن و توسعه زیرساخت‌های هوشمند، تا پیاده‌سازی راهکارهای مبتنی بر هوش مصنوعی، اینترنت اشیا، بلاکچین و متاورس.

					</Typography>



					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' mt={{xs: 2,lg:4}}>
						ما کی هستیم؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} color='text.primary' >

						ما یک تیم چندتخصصی هستیم.ترکیبی از توسعه‌دهندگان باتجربه، طراحان سیستم، معماران تجربه کاربری، استراتژیست‌های محصول، و مشاورانی که دغدغه‌شان، نتیجه است — نه فقط اجرا. ما پروژه نمی‌گیریم؛ ما مسئله را می‌گیریم و راه‌حل می‌سازیم.
					</Typography>



					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' mt={{xs: 2,lg:4}}>
						چطور فکر می‌کنیم؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} color='text.primary' >

						ما به‌جای اینکه از فناوری شروع کنیم، از هدف شروع می‌کنیم. هر راهکاری برای ما باید چهار ویژگی داشته باشد:						</Typography>


						<Stack direction='row'>
							<img src='/images/icon/Vector.svg'   />
							<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >قابل فهم باشد		</Typography>
						</Stack>

					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >قابل اجرا باشد	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >قابل مقیاس باشد	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >و در نهایت، قابل اتکا باشد	</Typography>
					</Stack>

					<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >و برای رسیدن به این ۴ اصل، سه ارزش را در تمام کارهایمان حفظ می‌کنیم:	</Typography>

					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >شفافیت در فرآیند	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >دقت در طراحی	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >تعهد به نتیجه</Typography>
					</Stack>

					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' mt={{xs: 2,lg:4}}>
						چرا "فیروزه"؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} color='text.primary' > ما نام برندمان را اتفاقی انتخاب نکردیم. فیروزه، نماد اصالت، دوام و ارزش پنهان‌شده در سادگی‌ست. برندی که نامش به‌جای هیجان، از اعتماد می‌آید؛ و به‌جای سر و صدا، اعتبار می‌سازد. </Typography>



					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' mt={1}>
						مسیر ما از کجاست، به کجا می‌رسد؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc}  lineHeight={2.5} color='text.primary' > فیروزه پارسیان امروز، با پروژه‌هایی در حوزه‌های هوش مصنوعی، بلاکچین، اینترنت اشیا، متاورس و اپلیکیشن‌های سازمانی، در حال همکاری با شرکت‌ها و برندهایی‌ست که مثل ما به آینده فکر می‌کنند، اما روی زمین قدم برمی‌دارند. چشم‌انداز ما ساده ولی بلندپروازانه است: </Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc}  lineHeight={2.5} color='text.primary' > ساختن یک برند فناورانه ایرانی، با استانداردهای جهانی و هویت مستقل. جایی که هر پروژه، نه فقط یک خروجی فنی، بلکه یک تغییر واقعی باشد.
						ما اینجا هستیم برای برندهایی که... </Typography>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >می‌خواهند نوآور باشند، اما بی‌دلیل ریسک نکنند</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >دنبال راه‌حل‌اند، نه صرفاً کد</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >آینده‌نگرند، اما نتیجه‌محور	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >به‌دنبال تیمی قابل اعتماد، منعطف و همراه‌اند	</Typography>
					</Stack>
					<Stack direction='row'>
						<img src='/images/icon/Vector.svg'   />
						<Typography variant='subtitle2' className={classes.aboutDesc} mt={0.5} mr={1} lineHeight={2.5} color='text.primary' >و به این باور رسیده‌اند که تکنولوژی، اگر درست استفاده شود، یک سرمایه است</Typography>
					</Stack>
					<Typography   variant='h6' className={classes.aboutDesc} lineHeight={2.5}  color='text.primary' >
						در یک جمله؟
					</Typography>
					<Typography variant='subtitle2' className={classes.aboutDesc} lineHeight={2.5} color='text.primary' mb={{xs: 2,lg:12}}  >ما آینده را پیش‌بینی نمی‌کنیم. ما زیرساختش را می‌سازیم.</Typography>


				</Container>
				{/*<Steps/>*/}

{/*
				<Grid className={classes.about_team}>
					<Typography variant'subtitle2 textAlign='start' variant='h6' color='text.primary' mt={14}>
						تیم فیروزه پارسیان
					</Typography>
					<Stack direction='row' mt={5}>
						{AboutTeamList.map((item: AboutTeamItem) => (
							<Grid key={item.id}>
								<AboutTeamCard aboutTeamItem={item}/>
							</Grid>
						))}
					</Stack>
				</Grid>
*/}
			</Grid>
		</Stack>
	);
};

export default ServiceSection;
