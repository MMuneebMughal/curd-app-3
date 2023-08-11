import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = () => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      //   {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href=''>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
