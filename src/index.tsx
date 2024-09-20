import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rouxsources from './pages/Rouxsources';
import Layout from './components/Layout';
import Tutorial from './pages/Tutorial';
import Roadmap from './pages/Roadmap';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rouxsources" element={<Rouxsources />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
