import {
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from '../ProductCard';
import theme from '../../styles/theme';
import MobileSlider from '../MobileSlider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchData } from '../../store/services/dataService';
import { useEffect } from 'react';
import { useData } from '../../store/features/productSlice';
import { useAppDispatch } from '../../store/hooks';
import { Product } from '../../Types/AllTypes';
import { productStyles } from './productStyles';

const Products = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();

  const { allProducts } = useData();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
          <Typography component={'h1'} sx={productStyles.title}>
            Content title goes here
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <FavoriteBorderIcon sx={productStyles.favoriteIcon} />
            <Typography
              sx={productStyles.category}
              component={'p'}
              fontSize="16px"
            >
              ÜRÜN
            </Typography>
            <Button sx={productStyles.button} variant="contained">
              Beğenilenler
            </Button>
          </Stack>
        </>
      </Stack>

      {mobile ? (
        <Box sx={productStyles.mobileSliderContainer}>
          <MobileSlider>
            {allProducts.slice(0, 4).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </MobileSlider>
        </Box>
      ) : (
        <Grid sx={productStyles.gridContainer} container maxWidth={'lg'}>
          {allProducts.slice(0, 4).map((product: Product) => (
            <Grid key={product.id} item md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      {!mobile && (
        <Button
          sx={productStyles.moreButton}
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
