import { Component, useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TextInput,
  TouchableHighlight,
} from "react-native";
import useApiSettings from "./services/apiSettings";
import styles from "./styles/app.styles";
import Movie from "./components/Movie";
import SelectedMovie from "./components/SelectedMovie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = useState(false);

  const apiSettings = useApiSettings();

  useEffect(() => {
    const fetchData = async () => {
      const moviesInfo = await apiSettings.getAll();
      setMovies(moviesInfo);
      const genresInfo = await apiSettings.getGenres();
      setGenres(genresInfo);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6F1190" />
      <View style={styles.header}>
        <Text style={styles.title}>Films!!!</Text>
        <View style={styles.searchArea}>
          <Text style={styles.searchText}>Search</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name or year"
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>
      </View>

      {selected ? (
        <SelectedMovie data={movies} />
      ) : (
        <FlatList
          style={styles.list}
          data={movies.filter(
            (movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase()) ||
              movie.year.includes(search)
          )}
          renderItem={({ item }) => {
            let info = movies.filter((movie) => movie.title === item.title);

            return (
              <TouchableHighlight
                onPress={() => {
                  setSelected(true);
                  setMovies(info);
                }}
              >
                <Movie movie={item} />
              </TouchableHighlight>
            );
          }}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            setSearch("");
            await apiSettings.getAll();
            setRefreshing(false);
          }}
        />
      )}
    </View>
  );
}
