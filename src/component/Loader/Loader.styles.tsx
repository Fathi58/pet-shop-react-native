import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../constants/constants";
import { scale } from "react-native-size-matters";

export const LoaderStyles = StyleSheet.create({
  modalCont: {
    margin: 0,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    height: windowHeight / 6,
    width: windowWidth / 1.15,
    borderRadius: scale(15),
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: scale(0),
      height: scale(2),
    },
    shadowRadius: scale(5),
    shadowOpacity: scale(0.6),
    elevation: scale(1),
  },
  title: {
    color: 'grey',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: scale(18),
    marginTop: scale(10),
  },
});
