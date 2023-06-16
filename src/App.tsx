import { Divider } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import Products from './components/Products';
import Footer from './components/Footer';

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
