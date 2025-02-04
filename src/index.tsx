import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rouxsources from './pages/Rouxsources';
import Layout from './components/Layout';
import Rouxtorials from './pages/Rouxtorials';
import Roadmap from './pages/Roadmap';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ mx: 1.5, mt: 1.5 }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rouxsources" element={<Rouxsources />} />
          <Route path="/rouxtorials" element={<Rouxtorials />} />
          <Route path="/roadmap" element={<Roadmap />} />
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

