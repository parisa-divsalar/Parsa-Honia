'use client';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Fragment, useState } from 'react';

import classes from '@/components/Landing/Question/question.module.css';

import { FaqList } from '@/components/Landing/Question/data';
import AppImage from '@/components/ui/AppImage';

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false); // تغییر نوع به string | false

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container bgcolor='background.mainLightCustom' mt={{xs:6 ,lg:10}}>
      <Container maxWidth='xl'>
        <Stack className={classes.question}  py={{ lg:5}} textAlign='center' height='auto'>
          <Grid display='flex' flexDirection='column' justifyContent='start' item xs={12} md={5}>
            <Typography
              textAlign={{sm:'center',lg:'right'}}
              color='text.primary'
              mt={{xs:3 ,lg:2}}
              // @ts-ignore
              variant='subtitle4'
              gutterBottom
            >
              سوالات متداول
            </Typography>
            <Typography
			  textAlign={{sm:'center',lg:'right'}}
              color='text.main'
              fontWeight='bold'
              variant='subtitle1'
              gutterBottom
            >
              برای کسب اطلاعات بیشتر تماس بگیرید.
            </Typography>
            <Stack className={classes.question_image}>
				<AppImage src='/images/questions.png' title='' width={252} height={330} />
			</Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            {FaqList.map((item, index) => (
              <Fragment key={`faq_${index}`}>
                <Accordion
                  key={item.question}
                  expanded={expanded === item.question}
                  onChange={handleChange(item.question)}
                  disableGutters
                  sx={{
                    backgroundColor: 'background.mainLightCustom',
                    padding: '10px 0',
                    boxShadow: 'unset',
                    backgroundImage: 'none',
                  }}
                >
                  <AccordionSummary
                    sx={{ padding: '0px' }}
                    expandIcon={expanded === item.question ? <CloseIcon /> : <AddIcon />}
                  >
                    <Typography ml={2} variant='subtitle1' color='primary.main'>
                      {index + 1}
                    </Typography>
                    <Typography variant='subtitle1' color='natural.natural900'>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography textAlign='right' variant='subtitle2' color='natural.natural900'>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Fragment>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default FAQSection;
