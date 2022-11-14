import { useEffect, useState } from "react";
import { Text, View, StatusBar, FlatList, TextInput } from "react-native";
import useApiSettings from "./services/apiSettings";
import styles from "./styles/app.styles";
import Movie from "./components/Movie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

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
      <FlatList
        style={styles.list}
        data={movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) ||
            movie.year.includes(search)
        )}
        renderItem={({ item }) => {
          return <Movie movie={item} />;
        }}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          setSearch("");
          await apiSettings.getAll();
          setRefreshing(false);
        }}
      />
    </View>
  );
}
