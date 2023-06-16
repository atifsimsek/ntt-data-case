import {
  Container,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from '@mui/material';
import img from '/images/navbarDropdown.png';
import { MenuItem } from '@mui/material';
import * as React from 'react';
import theme from '../../styles/theme';
import styles from './navbar.module.scss';
import './navbar.module.scss';

const Navbar = () => {
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <nav>
        <div className={styles.wrapper}>
          <ul className={styles.navLinks}>
            {/* Navbar links */}
            {Array.from({ length: 5 }).map((item, index) => (
              <li className={styles.link} key={index}>
                <a href="#">Menu Item</a>
                {/* Drop menu */}
                <div className={styles.dropMenu}>
                  <div className={styles.content}>
                    <div className={styles.row}>
                      <header>Header</header>
                      {/* Drop menu links */}
                      <ul className={styles.menuLinks}>
                        {Array.from({ length: 8 }).map((item, index) => (
                          <li key={index}>
                            <a href="#">Subheader</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.row}>
                      <header>Header</header>
                      <ul className={styles.menuLinks}>
                        {Array.from({ length: 8 }).map((item, index) => (
                          <li key={index}>
                            <a href="#">Subheader</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Drop menu image */}
                    {!tablet && (
                      <div className={styles.row}>
                        <img src={img} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
            {tablet && (
              <Select
                sx={{
                  mt: '1px',
                  width: '90px',
                  height: '16px',
                  color: '#6A6D70',
                  fontSize: '14px',
                  fontWeight: 500,

                  '& fieldset': { border: 'none', outline: 'none' },
                  '& input::placeholder': { color: '#74777A' },
                }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>More</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
