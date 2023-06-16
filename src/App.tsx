import { Divider } from '@mui/material';

import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import Products from './components/Products';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Divider
        sx={{
          borderColor: '#89919A',
        }}
      />
      <Navbar />
      <MainSlider />
      <Products />
      <Footer />
    </>
  );
}

export default App;
