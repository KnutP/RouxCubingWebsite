import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rouxsources from './pages/Rouxsources';
import Layout from './components/Layout';
import Rouxtorials from './pages/Rouxtorials';
import Rouxdmap from './pages/Rouxdmap';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          a: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:visited': {
              color: theme.palette.primary.main,
            },
          },
        }}
      />
      <Navbar />
      <Box sx={{ mx: 1, mt: 1 }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rouxsources" element={<Rouxsources />} />
          <Route path="/rouxtorials" element={<Rouxtorials />} />
          <Route path="/rouxdmap" element={<Rouxdmap />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

