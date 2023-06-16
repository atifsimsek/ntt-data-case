import { flexCenter } from '../../styles/commonStyle';

export const cardStyles = {
  card: {
    width: { md: '80%', lg: '85%' },
    border: '1px solid #E6E6E6',
    padding: '12px',
    borderRadius: '4px',
  },
  imageContainer: {
    position: 'relative',
    height: '30%',
  },
  image: {
    width: '100%',
    borderRadius: '5px 5px 0px 0px',
  },
  favoriteButtonContainer: {
    ...flexCenter,
    position: 'absolute',
    top: 8,
    right: 6,
    width: '24px',
    height: '24px',
    bgcolor: '#fff',
    borderRadius: '50%',
  },
  favoriteButton: {
    width: '30px',
    height: '30px',
    padding: '0',
    borderRadius: '50%',
  },
  productName: {
    paddingLeft: '4px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
  },
  price: {
    padding: '4px 8px',
    fontWeight: 700,
    fontSize: '14px',
    lineheight: '16px',
    backgroundColor: '#E6EEF8',
  },
  descriptionTitle: {
    paddingLeft: '4px',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '14px',
  },
  description: {
    paddingLeft: '4px',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
    lineClamp: 2,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  shippingMethod: {
    paddingLeft: '4px',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px',
  },
};
