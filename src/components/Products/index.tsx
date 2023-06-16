import {
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Box,
  Skeleton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from '../ProductCard';
import theme from '../../styles/theme';
import MobileSlider from '../MobileSlider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchData } from '../../store/services/dataService';
import { useEffect, useState } from 'react';
import { useData } from '../../store/features/productSlice';
import { useAppDispatch } from '../../store/hooks';
import { Product } from '../../Types/AllTypes';
import { productStyles } from './productStyles';

const Products = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const [showFav, setShowFav] = useState(false);
  const { allProducts, favorites, isLoading } = useData();

  const items = showFav ? favorites : allProducts;

  const test = useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const showMoreProduct = (currentCount: number) => {
    setCount(currentCount + 4);
    if (currentCount + 4 >= allProducts.length) {
      setShowMore(false);
    }
  };

  const resetProducts = () => {
    setCount(4);
    setShowMore(true);
  };

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
              fontSize="15px"
            >
              {favorites.length + ' Ürün'}
            </Typography>
            {showFav ? (
              <Button
                onClick={() => {
                  setShowFav(!showFav);
                }}
                sx={productStyles.button}
                variant="contained"
              >
                Beğenilenler
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowFav(!showFav);
                }}
                sx={{
                  ...productStyles.button,
                  color: '#0059BC !important',
                  backgroundColor: '#fff !important',
                  border: '1px solid #0059BC !important',
                }}
                variant="contained"
              >
                Tüm Ürünler
              </Button>
            )}
          </Stack>
        </>
      </Stack>

      {mobile ? (
        <Box sx={productStyles.mobileSliderContainer}>
          <MobileSlider>
            {items
              .slice(0, count)
              .map((product: Product) =>
                isLoading ? (
                  <Skeleton
                    key={product.id}
                    variant="rectangular"
                    width={'90%'}
                    height={280}
                  />
                ) : (
                  <ProductCard key={product.id} product={product} />
                )
              )}
          </MobileSlider>
        </Box>
      ) : (
        <Grid sx={productStyles.gridContainer} container maxWidth={'lg'}>
          {items.slice(0, count).map((product: Product) => (
            <Grid key={product.id} item md={3}>
              {isLoading ? (
                <Skeleton
                  sx={{ borderRadius: '4px' }}
                  variant="rectangular"
                  width={'90%'}
                  height={280}
                />
              ) : (
                <ProductCard key={product.id} product={product} />
              )}
            </Grid>
          ))}
        </Grid>
      )}

      {!mobile && !showFav && (
        <Button
          onClick={() => (showMore ? showMoreProduct(count) : resetProducts())}
          sx={productStyles.moreButton}
          endIcon={
            showMore ? (
              <ArrowForwardIcon fontSize="small" />
            ) : (
              <ArrowBackIcon fontSize="small" />
            )
          }
          variant="contained"
        >
          {showMore ? 'Daha Fazla' : 'Daha Az'}
        </Button>
      )}
    </Container>
  );
};

export default Products;
