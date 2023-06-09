import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import img from '/images/productImage.png';
import { productCardStyles } from './cardStyles';

const ProductCard = () => {
  return (
    <Box component={'article'} sx={productCardStyles.container}>
      <Box sx={productCardStyles.imageContainer}>
        <img
          className="product__image"
          src={img}
          alt={'img'}
          width="100%"
          height="179px"
          style={productCardStyles.productImage}
        />
        <Box sx={productCardStyles.favoriteIconContainer}>
          <IconButton
            sx={{
              width: '30px',
              height: '30px',
              padding: '0',
              borderRadius: '50%',
            }}
          >
            <FavoriteIcon sx={productCardStyles.favoriteIcon} />
          </IconButton>
        </Box>
      </Box>
      <Typography sx={productCardStyles.productName} component="h1">
        Product Name
      </Typography>
      <Typography sx={productCardStyles.productPrice} component={'h2'}>
        1.000,00 TL
      </Typography>
      <Typography
        sx={productCardStyles.descriptionTitle}
        component="h3"
        fontWeight="bold"
      >
        Description
      </Typography>
      <Typography sx={productCardStyles.descriptionContent} component="p">
        Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id
        sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium
        erat duis.
      </Typography>
      <Typography sx={productCardStyles.shippingInfo} component="p">
        Ücretsiz - Aynı gün kargo
      </Typography>
    </Box>
  );
};

export default ProductCard;
