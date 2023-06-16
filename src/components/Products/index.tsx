import {
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from '../ProductCard';
import theme from '../../styles/theme';
import MobileSlider from '../MobileSlider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Products = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={'lg'}>
      <Stack
        direction={'row'}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mt: '48px',
        }}
      >
        <>
          <Typography
            component={'h1'}
            sx={{
              fontWeight: 500,
              fontSize: { xs: '14px', lg: '32px' },
            }}
          >
            Content title goes here
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <FavoriteBorderIcon
              sx={{
                width: '20px',
                height: '18.35px',
              }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: '12px', lg: '16px' },
                lineHeight: '19px',
              }}
              component={'p'}
              fontSize="16px"
            >
              ÜRÜN
            </Typography>
            <Button
              sx={{
                width: '50%',
                fontWeight: 500,
                fontSize: { xs: '12px', lg: '16px' },
                lineHeight: '19px',
                textTransform: 'none',
              }}
              variant="contained"
            >
              Beğenilenler
            </Button>
          </Stack>
        </>
      </Stack>
      {mobile ? (
        <MobileSlider />
      ) : (
        <Grid container maxWidth={'lg'}>
          <Grid item md={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3}>
            <ProductCard />
          </Grid>
        </Grid>
      )}

      {!mobile && (
        <Button
          sx={{
            display: { sm: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '193px',
            height: '56px',
            fontWeight: 500,
            fontSize: { xs: '12px', lg: '16px' },
            textTransform: 'none',
            margin: 'auto',
            mt: '36px',
          }}
          endIcon={<ArrowForwardIcon fontSize="small" />}
          variant="contained"
        >
          Daha Fazla
        </Button>
      )}
    </Container>
  );
};

export default Products;
