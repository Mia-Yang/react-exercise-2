import React from 'react';
import product_image_placeholder from '../assets/product_image_placeholder.png';
import '../components/Product.css';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    };
  }
  addToCart = () => {
    this.setState({ added: true });
  };

  render() {
    return (
      <div className="product">
        <h3>iPhone11</h3>
        <img src={product_image_placeholder} alt="product img"></img>
        <div className="info">
          <p>￥5999</p>
          <button onClick={this.addToCart}>add to cart</button>
        </div>
      </div>
    );
  }
}
export default Product;
