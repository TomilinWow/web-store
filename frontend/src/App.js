import React from 'react';
import Header from "./components/Header/Header/Header";
import Search from "./components/Header/Search/Search";
import Container from "@material-ui/core/Container";
import ProductsList from "./components/Products/ProductsList";
import styles from './App.css'

const App = () => {
  return (
      <div>
        <Header/>
        <Container maxWidth="md" className={styles.container}>
          <ProductsList/>
        </Container>

      </div>
  )
}
export default App;