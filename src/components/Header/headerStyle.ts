import { flexCenter } from '../../styles/commonStyle';
import theme from '../../styles/theme';

export const headerStyles = {
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      height: '148px',
      width: '100%',
    },
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
  searchButton: {
    ...flexCenter,
    flexShrink: 0,
    height: '40px',
    width: '110px',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.main,
    marginLeft: '12px',
    boxShadow: 'none',
  },
  headerContainer: {
    maxWidth: 'lg',
  },
  styledLink: {
    ...flexCenter,
    marginRight: '24px',
    width: {
      sm: '183px',
      md: '170px',
      lg: '190px',
    },
    height: {
      sm: '24px',
      md: '25px',
      lg: '24px',
    },
  },
  styledIconButton: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    zIndex: 999,
  },
  styledBox: {
    paddingTop: '91px',
    paddingLeft: '12px',
    position: 'absolute',
    backgroundColor: '#fff',
    inset: '0px',
    width: '100%',
    height: '100vh',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    transition: 'all 1s',
  },
  styledTypography: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '28px',
  },
  styledDivider: {
    mt: '24px',
    border: '1px solid #D9D9D9',
  },
};
