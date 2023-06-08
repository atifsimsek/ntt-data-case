import {
  Box,
  Button,
  Container,
  Link,
  styled,
  useMediaQuery,
} from '@mui/material';
import Image from 'mui-image';
import logo from '/svg/logo.svg';
import SearchArea from './SearchArea';
import { Icon } from './Icons';
import { flexCenter } from '../styles/commonStyle';
import theme from '../styles/theme';

const Header = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      height: '89px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '148px',
      width: '100%',
    },
  }));

  const SearchButton = styled(Button)(({ theme }) => ({
    ...flexCenter,
    flexShrink: 0,
    height: '40px',
    width: '110px',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.main,
    marginLeft: '12px',
    boxShadow: 'none',
  }));

  return (
    <Container maxWidth="lg">
      <HeaderBox component="header">
        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            mr={'24px'}
            href={'/'}
            sx={{
              ...flexCenter,
              width: { sm: '183px', md: '170px', lg: '190px' },
              height: { sm: '24px', md: '25px', lg: '24px' },
            }}
          >
            <Image src={logo} width={'100%'} height={'auto'} duration={0} />
          </Link>
          {mobile ? <Icon name="menu" /> : null}
        </Box>
        <SearchArea />
        {!mobile && (
          <SearchButton variant="contained">
            <Icon name="search" size={16} />
          </SearchButton>
        )}
      </HeaderBox>
    </Container>
  );
};

export default Header;
