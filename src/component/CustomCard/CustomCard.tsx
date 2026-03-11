import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Pet } from '../../redux/petSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import CustomCardStyles from './CustomCard.styles';

interface PetCardProps {
  pet: Pet;
}

const CustomCard: React.FC<PetCardProps> = ({ pet }) => {
  const dispatch = useDispatch();
const styles = CustomCardStyles;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isAdded = cartItems.some((item: { id: string; }) => item.id === pet.id);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addToCart(pet));
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <Text style={styles.text}>Name: {pet.name}</Text>
      <Text style={styles.text}>Breed: {pet.breed}</Text>
      <Text style={styles.text}>Price: ₹{pet.price}</Text>

      <TouchableOpacity
        style={[styles.button, isAdded ? styles.addedButton : styles.addButton]}
        onPress={handleAddToCart}
        activeOpacity={0.7}
        disabled={isAdded} 
      >
        <Text style={styles.buttonText}>
          {isAdded ? 'Added' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default CustomCard;
