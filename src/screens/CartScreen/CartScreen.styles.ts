import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { windowWidth } from "../../constants/constants";

export const CartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: scale(80),
  },
  listContent: {
    paddingBottom: 80,
  },
  card: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },

  button: {
     flexDirection: "row",
    justifyContent: "space-between",
    width:windowWidth/1.2,
    height:scale(40),
    paddingHorizontal:scale(15),
    bottom:scale(10),
    alignSelf:'center',
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
  bottomBar: {
    alignSelf: 'center',
    borderRadius: scale(10),
    width: '70%',
    height: scale(50),
    backgroundColor: 'black',
    borderTopWidth: 1,
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: scale(20),
  },
  totalText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
