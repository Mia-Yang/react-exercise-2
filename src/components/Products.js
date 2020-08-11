import React from 'react';
import Product from './Product';

class Products extends React.Component {
  state = {
    products: [1, 2, 3, 4, 5, 6],
  }
  render() {
    return this.state.products.map((product) => (
      <Product id={product} key={product} />
    )
  }
}
export default Products;
