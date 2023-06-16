import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../Types/AllTypes';
import { cardStyles } from './cardStyles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, imageUrl, price, shippingMethod } = product;
  return (
    <Box sx={cardStyles.card} component="article">
      <Box sx={cardStyles.imageContainer}>
        <img width={'100%'} src={imageUrl} style={cardStyles.image} alt="" />

        <Box sx={cardStyles.favoriteButtonContainer}>
          <IconButton sx={cardStyles.favoriteButton}>
            <FavoriteIcon sx={{ width: '13.33px', height: '12.33px' }} />
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
