import logo from './logo.svg';
import './App.css';
import { Header } from './components/partials/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Main } from './components/pages/main';

function App() {
  return (
    <ChakraProvider>
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
