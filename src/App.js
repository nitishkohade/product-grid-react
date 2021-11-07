import { Redirect, Route, Switch } from 'react-router';
import CartScreen from './view/cart/cart';
import ProductScreen from './view/product/product'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/list" />} />
      <Route exact path="/list" render={() => <CartScreen />} />
      <Route exact path="/list/:productID" render={() => <ProductScreen />} />
    </Switch>
  );
}

export default App;
