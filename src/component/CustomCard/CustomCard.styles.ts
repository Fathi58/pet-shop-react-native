import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

 const CustomCardStyles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: scale(10),
    marginVertical: scale(8),
    marginHorizontal: scale(10),
    borderRadius: scale(8),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    height: 120,
    borderRadius: scale(8),
    marginBottom: scale(8),
  },
  text: {
    marginBottom: scale(4),
    fontSize: 14,
  },
  button: {
    paddingVertical: scale(8),
    borderRadius: scale(6),
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'black',
  },
  addedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default CustomCardStyles;
