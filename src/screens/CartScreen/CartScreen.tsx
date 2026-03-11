import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/cartSlice';
import Topbar from '../../component/TopBar/TopBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../navigation/types';
import { CartScreenStyles } from './CartScreen.styles';
type AddPetScreenNavigationProp = NativeStackNavigationProp<
  MainTabParamList,
  'Cart'
>;
interface Props {
  navigation: AddPetScreenNavigationProp;
}
const CartScreen: React.FC<Props> = ({ navigation }) => {
  const styles = CartScreenStyles;
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.items);

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0,
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.breed}</Text>
      <Text>₹{item.price}</Text>

      <Button
        title="Remove"
        onPress={() => dispatch(removeFromCart(item.id))}
        color={'black'}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Topbar title="Cart" />
      {total === 0 && (
        <Text style={styles.emptyText}>No Items added yet</Text>
      )}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      {total !== 0 && (
          <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Order Placed Successfully');
          navigation.navigate('Pets');
          dispatch(clearCart());
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Total: ₹{total}</Text>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
      )}
    </View>
  );
};


export default CartScreen;
