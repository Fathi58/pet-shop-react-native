import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Pet {
  id: string;
  name: string;
  breed: string;
  price: number;
  image: string;
}

interface PetsState {
  list: Pet[];
}

const initialState: PetsState = {
  list: [],
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.list = action.payload;
    },
    addPet: (state, action: PayloadAction<Pet>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setPets, addPet } = petsSlice.actions;
export default petsSlice.reducer;
