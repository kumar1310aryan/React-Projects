// import React from "react";
import NavigationBar from "./Components/NavigationBar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <h1>Welcome to the App!</h1>
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
