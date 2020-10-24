import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Axios from 'axios';

const Home = ({route, navigation}) => {
  const [popular, setpopular] = useState([]);
  const [tRated, settRated] = useState([]);
  const [upcoming, setupcoming] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=3ab89b5f5819504df8e2ea3c5f0e8862&language=en-US&page=1',
    ).then((resp) => {
      setpopular(resp.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=3ab89b5f5819504df8e2ea3c5f0e8862&language=en-US&page=1',
    ).then((resp) => {
      settRated(resp.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=3ab89b5f5819504df8e2ea3c5f0e8862&language=en-US&page=1',
    ).then((resp) => {
      setupcoming(resp.data.results);
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={{width: wp(45), height: hp(45), marginHorizontal: 2}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C0113'}}>
      <View style={styles.header}>
        <Icon name="list" size={30} color="#F03C02" />
        <Image
          source={require('./assets/Images/movie.png')}
          style={{width: wp(60), height: hp(5)}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon2 name="search" size={25} color="#F03C02" />
        </TouchableOpacity>
      </View>
      <View style={{margin: 10}}>
        <ScrollView>
          <Text style={styles.selectContent}>TOP RATED</Text>
          <FlatList
            data={tRated.filter((data, index) =>
              data.genre_ids.filter((d) => d === 28),
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.selectContent}>POPULAR</Text>
          <FlatList
            data={popular.filter((data, index) =>
              data.genre_ids.filter((d) => d === 28),
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.selectContent}>UPCOMING</Text>
          <FlatList
            data={upcoming.filter((data, index) =>
              data.genre_ids.filter((d) => d === 28),
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    paddingVertical: 10,
    backgroundColor: '#11000C',
  },
  selectContent: {
    fontSize: 20,
    color: '#F03C02',
    paddingVertical: 8,
  },
});

export default Home;
