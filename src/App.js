/**
 * Root Application Component
 *
 * The App component serves as the root of the React application. It wraps the entire application within the ChakraProvider component to apply the custom theme settings globally. The application is also enclosed within a React Router's BrowserRouter, enabling client-side navigation.
 *
 * Structure:
 * - ChakraProvider: This component from Chakra UI takes a 'theme' prop to provide a consistent styling baseline throughout the application.
 * - BrowserRouter: A Router component from React Router that uses the HTML5 history API to keep UI in sync with the URL.
 * - Header: A custom header component that provides navigation functionality for the application.
 * - Routes and Route: React Router components that declare possible routes in the application.
 *   Currently, only the root path '/' is defined, which renders the Main component.
 * - Main: This component serves as the landing page for the application, displayed when the user navigates to the root URL.
 *
 * Usage:
 * App is the top-level component and should be rendered inside the root DOM element in the index.js file.
 */

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
