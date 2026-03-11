import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const AddPetScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    padding: 20,
  },

  imageBox: {
    height: 200,
    width: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  imageText: {
    color: '#999',
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
    borderRadius: 6,
  },

  errorText: {
    color: 'red',
    marginBottom: 5,
  },

  button: {
    paddingVertical: scale(8),
    borderRadius: scale(6),
    alignItems: 'center',
    backgroundColor: 'black',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
