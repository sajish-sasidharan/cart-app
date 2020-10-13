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
  cartUpdate = (product, updateValue)=>{
    let cartItems= this.state.cartItems.slice();
      if(product.count===1 && updateValue===-1){
        
        this.setState({cartItems:cartItems.filter(item=>item.name!== product.name)})
      }
      else {
        cartItems.map(item=>{
          if(item.name===product.name){
            item.count = item.count + updateValue;
          }
          return 1;
        })
        this.setState({cartItems});
        
      }
  }

  addToCart=(product)=>{
    const cartItems= this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item)=>{
      if(item.name===product.name){
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
<Cart cartItems = {this.state.cartItems} cartUpdate ={this.cartUpdate}/>
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
