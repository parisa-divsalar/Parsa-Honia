import { Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import classes from '@/components/Landing/Service/service.module.css';
import ServiceCard from '@/components/Card/Service';
import { ServiceList } from '@/components/Landing/Service/data';
import { ServiceItem } from '@/types/service';

const ServiceSection = () => {
  return (
    <Container maxWidth='xl'>
      <Stack mt={4} textAlign='center'>
        <Grid className={classes.section}>
          {ServiceList.map((item: ServiceItem) => (
            <Grid size={{ xs: 4 }} key={item.id}>
              <ServiceCard serviceItem={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ServiceSection;
