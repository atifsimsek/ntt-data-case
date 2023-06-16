import { flexCenter } from '../../styles/commonStyle';

export const productCardStyles = {
  // Main container styles
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    height: '375px',
    border: 1,
    p: 2,
    borderRadius: '4px',
    spacing: 1,
    my: 2,
    borderColor: '#E6EEF8',
    padding: '13px',
    gap: 2,
    justifyContent: 'center',
    maxWidth: { md: '85%', lg: '87%' },
  },
  // Image container styles
  imageContainer: {
    position: 'relative',
  },
  // Product image styles

  // Favorite icon container styles
  favoriteIconContainer: {
    ...flexCenter,
    position: 'absolute',
    top: 8,
    right: 8,
    width: '24px',
    height: '24px',
    bgcolor: '#fff',
    borderRadius: '50%',
  },
  // Favorite icon styles
  favoriteIcon: {
    width: '13.33px',
    height: '12.33px',
  },
  // Product name styles
  productName: {
    height: '1000px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
  },
  // Product price styles
  productPrice: {
    fontWeight: 700,
    fontSize: '14px',
    lineheight: '16px',
    backgroundColor: '#E6EEF8',
  },
  // Description title styles
  descriptionTitle: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '14px',
  },
  // Description content styles
  descriptionContent: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
  },
  // Shipping info styles
  shippingInfo: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px',
  },
};

type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export const imgStyles: { borderRadius: string; objectFit: ObjectFit } = {
  borderRadius: '5px',
  objectFit: 'contain',
};
