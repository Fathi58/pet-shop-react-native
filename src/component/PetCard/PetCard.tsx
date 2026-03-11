import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { PetCardStyles } from './PetCard.styles';

interface Props {
  pet: any;
  onAdd: () => void;
}

export default function PetCard({ pet, onAdd }: Props) {
  const styles=PetCardStyles;
  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.image }} style={{ height: 120 }} />
      <Text>Name: {pet.name}</Text>
      <Text>Breed: {pet.breed}</Text>
      <Text>Price: ₹{pet.price}</Text>
      <Button title="Add To Cart" onPress={onAdd} />
    </View>
  );
}
