import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setPets, Pet } from '../../redux/petSlice';
import { getRandomPetImage } from '../../api/api';
import Loader from '../../component/Loader/Loader';
import Topbar from '../../component/TopBar/TopBar';
import CustomCard from '../../component/CustomCard/CustomCard';
import RefreshControlWrapper from '../../component/RefreshControlWrapper/RefreshControlWrapper';
import { PetListStyles } from './PetListScreen.styles';

const PetListScreen:React.FC<any>=()=> {
  const styles = PetListStyles;
  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.pets.list);
  const [loading, setLoading] = useState(true);
  const fetchInitialPets = async () => {
    try {
      setLoading(true);
      const requests = Array.from({ length: 8 }, () => getRandomPetImage());
      const responses = await Promise.all(requests);

      const initialPets: Pet[] = responses.map((res, i) => ({
        id: Date.now().toString() + i,
        name: 'Dog',
        breed: 'Random Breed',
        price: 200,
        image: res.data.message,
      }));

      dispatch(setPets(initialPets));
    } catch (err) {
      console.log('Error fetching pets', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialPets();
  }, []);
  const handleRefresh = () => {
    fetchInitialPets();
  };


  return (
    <View style={styles.container}>
      <Topbar title="Pet List" />
      <FlatList
        data={pets}
        keyExtractor={(item: Pet) => item.id}
        renderItem={({ item }) => <CustomCard pet={item} />}
        refreshControl={
          <RefreshControlWrapper
            refreshing={loading}
            onRefresh={handleRefresh}
          />
        }
      />
      <Loader visible={loading} msg="Fetching pet data" screenName="Home" />
    </View>
  );
}
export default PetListScreen;
