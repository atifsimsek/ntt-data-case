import { Container, Stack, Typography, Button, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from '../ProductCard';

const Products = () => {
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
              fontSize: '32px',
              lineHeight: '38px',
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
                fontSize: '16px',
                lineHeight: '19px',
              }}
              component={'p'}
              fontSize="16px"
            >
              ÜRÜN
            </Typography>
            <Button
              sx={{
                fontWeight: 500,
                fontSize: '16px',
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
      <Grid
        sx={{
          width: '1200px',
        }}
        container
        maxWidth={'lg'}
      >
        <Grid md={3}>
          <ProductCard />
        </Grid>
        <Grid md={3}>
          <ProductCard />
        </Grid>
        <Grid md={3}>
          <ProductCard />
        </Grid>
        <Grid md={3}>
          <ProductCard />
        </Grid>
        <Grid md={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
