import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../Types/AllTypes';
import { cardStyles } from './cardStyles';
import { useAppDispatch } from '../../store/hooks';
import { handleFavorite, useData } from '../../store/features/productSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, description, imageUrl, price, shippingMethod } = product;
  const { favorites } = useData();

  const findFavorite = favorites.findIndex((item: Product) => item.id === id);
  const isFavorite = findFavorite !== -1 ? true : false;
  const dispatch = useAppDispatch();

  const favoriteHandle = () => {
    dispatch(handleFavorite(product));
  };
  return (
    <Box sx={cardStyles.card} component="article">
      <Box sx={cardStyles.imageContainer}>
        <img width={'100%'} src={imageUrl} style={cardStyles.image} alt="" />

        <Box sx={cardStyles.favoriteButtonContainer}>
          <IconButton
            onClick={() => {
              favoriteHandle();
            }}
            sx={cardStyles.favoriteButton}
          >
            <FavoriteIcon
              sx={{
                width: '13.33px',
                height: '12.33px',
                color: `${isFavorite ? 'red' : '#e0e0e0'}`,
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          mt: '12px',
          height: '70%',
          display: 'grid',
          gap: '8px',
        }}
      >
        <Typography sx={cardStyles.productName} component="h1">
          {name}
        </Typography>
        <Typography sx={cardStyles.price} component={'h2'}>
          {price + ' TL'}
        </Typography>
        <Typography
          sx={cardStyles.descriptionTitle}
          component="h3"
          fontWeight="bold"
        >
          Description
        </Typography>
        <Typography sx={cardStyles.description} component="p">
          {description}
        </Typography>
        <Typography sx={cardStyles.shippingMethod} component="p">
          {shippingMethod}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
