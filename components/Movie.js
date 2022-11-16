import { View, Text, Image, TouchableHighlight, FlatList } from "react-native";
import React from "react";
import styles from "../styles/movie.styles";

const Movie = ({ movie }) => {
  //console.log("img-------------", movie.image);
  return (
    <View style={styles.container}>
      <View style={styles.movieHeader}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text>Year: {movie.year}</Text>
        <Text>Rating: {movie.rating}</Text>
        <Text>({movie.votes} votes)</Text>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: movie.image }} />
      </View>
    </View>
  );
};

export default Movie;
