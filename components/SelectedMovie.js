import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/infoStyles";

const SelectedMovie = ({ data }) => {
  console.log("data------>", data[0].image);
  return (
    <View>
      <Text>{data[0].title}</Text>
      <Text>{data[0].year}</Text>
      <Text>{data[0].review}</Text>
      <Text>{data[0].originalTitle}</Text>
      <Text>{data[0].rating}</Text>
      <Text>{data[0].votes}</Text>
      <View>
        <Image style={styles.image} source={{ uri: data[0].image }} />
      </View>
    </View>
  );
};

export default SelectedMovie;
