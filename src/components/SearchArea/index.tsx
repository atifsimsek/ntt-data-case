import {
  Box,
  Button,
  Fade,
  Menu,
  MenuItem,
  OutlinedInput,
  Typography,
  styled,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { flexCenter } from '../../styles/commonStyle';
import { Icon } from '../Icons';
import theme from '../../styles/theme';
import './searchBar.scss';

const SearchBar = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MobileSearchButton = styled(Button)(({ theme }) => ({
    ...flexCenter,
    flexShrink: 0,
    height: '40px',
    width: '106px',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.main,

    position: 'absolute',
    right: '0px',
    bottom: '0px',
    borderTopLeftRadius: '  0px ',
    borderBottomLeftRadius: '0px ',
    boxShadow: 'none',
  }));

  return (
    <Box
      position={'relative'}
      sx={{
        ...flexCenter,
      }}
    >
      <OutlinedInput
        sx={{
          height: '40px',
          width: { xs: '350px', sm: '448px', md: '364px', lg: '735px' },
          border: '1px solid #89919A',
          '& fieldset': { border: 'none', outline: 'none' },
          '& input::placeholder': { color: '#74777A' },
          marginTop: { xs: '24px', sm: '0px' },
        }}
        placeholder="Search..."
      />
      {!mobile && (
        <Button
          sx={{
            position: 'absolute',
            right: '1px',
            top: '1px',
            width: '132px',
            height: '38px',
            fontSize: '14px',
            padding: '6px 12px',
            backgroundColor: '#F4F5F6',
            color: '#32363A',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: '  0px ',
            borderBottomLeftRadius: '0px ',
          }}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Typography>Categories</Typography>
          {open ? <Icon name="arrowUp" /> : <Icon name="arrowDown" />}
        </Button>
      )}
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Categori 1</MenuItem>
        <MenuItem onClick={handleClose}>Categori 2</MenuItem>
        <MenuItem onClick={handleClose}>Categori 3</MenuItem>
      </Menu>
      {mobile && (
        <MobileSearchButton variant="contained">
          <Icon name="search" size={16} />
        </MobileSearchButton>
      )}
    </Box>
  );
};

export default SearchBar;
