import { Divider } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';

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
    </>
  );
}

export default App;
