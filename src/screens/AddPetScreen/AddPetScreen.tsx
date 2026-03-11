import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Topbar from '../../component/TopBar/TopBar';
import { submitPet } from '../../api/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../navigation/types';
import { AddPetScreenStyles } from './AddPetScreen.styles';
import { useDispatch } from 'react-redux';
import { addPet } from '../../redux/petSlice';

type AddPetScreenNavigationProp = NativeStackNavigationProp<
  MainTabParamList,
  'AddPet'
>;

interface Props {
  navigation: AddPetScreenNavigationProp;
}

interface FormData {
  name: string;
  breed: string;
  age: number;
  price: number;
}

const schema = yup.object().shape({
  name: yup.string().required('Pet name required'),
  breed: yup.string().required('Breed required'),
  age: yup.number().typeError('Age must be a number').required('Age required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .required('Price required'),
});

const AddPetScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const styles=AddPetScreenStyles;
  const [image, setImage] = useState<string | null>(null);

const {
  control,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<FormData>({
  resolver: yupResolver(schema),
});

  const pickImage = async () => {
    const result: any = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

const onSubmit = async (data: FormData) => {
  if (!image) {
    Alert.alert('Please upload an image');
    return;
  }

  try {
    const payload = { ...data, image };
    await submitPet(payload);
    const newPet = {
      id: Date.now().toString(),
      name: data.name,
      breed: data.breed,
      age: data.age,
      price: data.price,
      image: image,
    };
    dispatch(addPet(newPet));
    if (Platform.OS === 'android') {
      ToastAndroid.show('New pet details added!', ToastAndroid.SHORT);
    } else {
      Alert.alert('Success', 'New pet details added!');
    }

    reset();
    setImage(null);
     
    navigation.navigate('Pets');
  } catch (err) {
    console.log('Error submitting pet', err);
    Alert.alert('Failed to submit pet');
  }
};

  return (
    <View style={styles.screen}>
      <Topbar title="Add Pet" />

      <View style={styles.container}>
        {/* ---------- Upload Image Box ---------- */}
        <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imageText}>Tap to upload image</Text>
          )}
        </TouchableOpacity>

        {/* ---------- Form Fields ---------- */}
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Pet Name"
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />
        <Text style={styles.errorText}>{errors.name?.message}</Text>

        <Controller
          control={control}
          name="breed"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Breed"
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />
        <Text style={styles.errorText}>{errors.breed?.message}</Text>

        <Controller
          control={control}
          name="age"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Age"
              keyboardType="numeric"
              value={value?.toString() || ''}
              onChangeText={text => onChange(text)}
              style={styles.input}
            />
          )}
        />
        <Text style={styles.errorText}>{errors.age?.message}</Text>

        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Price"
              keyboardType="numeric"
              value={value?.toString() || ''}
              onChangeText={text => onChange(text)}
              style={styles.input}
            />
          )}
        />
        <Text style={styles.errorText}>{errors.price?.message}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>{'Submit Pet'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default AddPetScreen;
