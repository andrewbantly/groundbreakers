import logo from './logo.svg';
import './App.css';
import { Header } from './components/partials/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from './components/pages/main';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route element={<Main />} path='/' />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
