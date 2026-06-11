import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import usePagination from '@mui/material/usePagination';

import classes from '@/components/ui/Pagination/pagination.module.css';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <Stack sx={{ borderColor: 'fundamental.border' }} borderTop='1px solid' pt={1}>
      <nav className={classes.pagination}>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <button
                  type='button'
                  style={{
                    fontWeight: selected ? 'bold' : undefined,
                    background: selected ? '#FCE8EA' : undefined,
                  }}
                  {...item}
                >
                  <Typography color={selected ? '#E30613' : 'text.primary'}>{page}</Typography>
                </button>
              );
            } else if (type === 'previous') {
              children = (
                <button type='button' {...item}>
                  <Typography color='text.primary'>قبلی</Typography>
                </button>
              );
            } else if (type === 'next') {
              children = (
                <button type='button' {...item}>
                  <Typography color='text.primary'>بعدی</Typography>
                </button>
              );
            }

            return (
              <li key={index}>
                <Typography color='text.primary'>{children}</Typography>
              </li>
            );
          })}
        </List>
      </nav>
    </Stack>
  );
}
