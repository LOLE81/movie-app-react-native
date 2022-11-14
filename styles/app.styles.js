import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D54FD5",
    alignItems: "center",
    padding: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: "#98ceeb",
  },
  list: {
    width: "95%",
    backgroundColor: "#519AC1",
    borderRadius: 15,
  },
  searchArea: {
    flexDirection: "row",
    flex: 1,
  },
  searchText: {
    flex: 1,
    color: "#6F1190",
    textAlign: "center",
    textAlignVertical: "center",
  },
  textInput: {
    flex: 2.5,
    backgroundColor: "#d97ec5",
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    marginStart: 1,
    paddingEnd: 2,
    textAlignVertical: "center",
    textAlign: "right",
  },
});

export default styles;
