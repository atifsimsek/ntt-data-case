import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchArea from '../SearchArea';
import { Icon } from '../Icons';
import { useState } from 'react';
import theme from '../../styles/theme';
import { headerStyles } from './headerStyle';

const Header = () => {
  const [open, setOpen] = useState(false);

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={headerStyles.headerContainer}>
      <Box component="header" sx={headerStyles.headerBox}>
        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/" sx={headerStyles.styledLink}>
            <Icon name="logo" color="#0059BC" />
          </Link>
          {mobile && (
            <IconButton
              onClick={() => setOpen(!open)}
              sx={headerStyles.styledIconButton}
            >
              {!open ? (
                <Icon name="menu" />
              ) : (
                <CloseIcon sx={{ width: '24px', height: '24px', ml: '2px' }} />
              )}
            </IconButton>
          )}
        </Box>
        <SearchArea />
        {!mobile && (
          <Button variant="contained" sx={headerStyles.searchButton}>
            <Icon name="search" size={16} />
          </Button>
        )}

        <Box
          sx={{
            ...headerStyles.styledBox,
            transform: open ? 'translateY(0px)' : 'translateY(-100%)',
          }}
        >
          {Array.from({ length: 3 }).map((_item, index) => (
            <Typography
              key={index}
              sx={{
                ...headerStyles.styledTypography,
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '28px',
              }}
            >
              {'Categori ' + (index + 1)}
            </Typography>
          ))}

          <Divider sx={headerStyles.styledDivider} />
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
