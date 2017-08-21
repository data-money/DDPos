
import { StackNavigator } from 'react-navigation';

import PurchaseList from '../PurchaseList';
import PurchaseItem from '../PurchaseItem';
import OrderList from '../OrderList';
import OrderItem from '../OrderItem';
import ItemDetail from '../ItemDetail';


const SimpleApp = StackNavigator({
  OrderList: { screen: OrderList },
  OrderItem: { screen: OrderItem },
  ItemDetail: { screen: ItemDetail },
  List: { screen: PurchaseList },
  Single: { screen: PurchaseItem },

});

export default SimpleApp;
