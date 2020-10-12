import React from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import data from "./data.json";



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : data.items,
      cartItems:[]
    }
  }
  addToCart=(product)=>{
    const cartItems= this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item)=>{
      console.log(item.name,product.name)
      if(item.name===product.name){
        console.log(item.count)
       item.count ++;
       alreadyInCart = true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
    this.setState({cartItems});
  }
  render(){
  return (
    <div className="grid-container">
      <header className="App-header">
       <a href="/">Cart Application</a>
      </header> 
      <main>
        <div className = "content">
          <div className= "main">
    <Products products = {this.state.products} addToCart={this.addToCart}/>
          </div>
          <div className = "sidebar">
<Cart cartItems = {this.state.cartItems}/>
          </div>
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
  } 
}

export default App;
