import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 2,
    backgroundColor: "#98ceeb",
    borderColor: "#7E4C99",
    borderWidth: 2,
    borderRadius: 20,
    padding: 7,
    margin: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieHeader: {
    flexDirection: "column",
    flex: 1,
  },
  movieTitle: {
    color: "#684EC0",
    fontSize: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    alignContent: "center",
  },
});

export default styles;
