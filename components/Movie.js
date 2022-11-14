import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/movie.styles";

const Movie = ({ movie }) => {
  return (
    <View style={styles.container}>
      <View style={styles.movieHeader}>
        <View>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
        <Text>{movie.rating}</Text>
        <Text>{movie.votes}</Text>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: movie.image }} />
      </View>
    </View>
  );
};

export default Movie;
