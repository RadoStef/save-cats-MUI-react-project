import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import IconsElement from "./components/IconsElement/IconsElement";
import Banner from "./components/Banner/Banner";
import Footer from './components/Footer/Footer';
import Products from './components/products/Products';

function App() {

  useEffect(() => {
    document.title = 'React / MUI application';
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Footer />
      <IconsElement />
    </>
  );
}

export default App;
