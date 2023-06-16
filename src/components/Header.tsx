import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
  styled,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchArea from './SearchArea';
import { Icon } from './Icons';
import { flexCenter } from '../styles/commonStyle';
import theme from '../styles/theme';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

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
    <Container sx={{ position: 'relative' }} maxWidth="lg">
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
            <Icon name="deneme" color="#0059BC" />
          </Link>
          {mobile && (
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                zindex: 999,
              }}
            >
              <Icon name="menu" />
            </IconButton>
          )}
        </Box>
        <SearchArea />
        {!mobile && (
          <SearchButton variant="contained">
            <Icon name="search" size={16} />
          </SearchButton>
        )}

        <Box
          sx={{
            paddingTop: '91px',
            paddingLeft: '12px',
            position: 'absolute',
            backgroundColor: '#fff',
            inset: '0px',
            width: '100%',
            height: '800px',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            transition: 'all 1s',

            transform: open ? 'translateY(0px)' : 'translateY(-100%)',
          }}
        >
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              position: 'absolute',
              top: '24px',
              right: '30px',
              zindex: 999,
              color: '#1C1B1F',
            }}
          >
            <CloseIcon />
          </IconButton>
          {Array.from({ length: 3 }).map((item, index) => (
            <Typography
              sx={{ fontWeight: 500, fontSize: '24px', lineHeight: '28px' }}
            >
              {'Categori ' + (index + 1)}
            </Typography>
          ))}

          <Divider
            sx={{
              mt: '24px',
              border: '1px solid #D9D9D9',
            }}
          />
        </Box>
      </HeaderBox>
    </Container>
  );
};

export default Header;
