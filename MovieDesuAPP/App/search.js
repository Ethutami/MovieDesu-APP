import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Axios from 'axios';

const search = ({route, navigation}) => {
  const [cari, setCari] = useState('');
  const cariFilem = (value) => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3ab89b5f5819504df8e2ea3c5f0e8862&language=en-US&query=${value}&page=1&include_adult=false`,
    ).then((resp) => {
      setCari(resp.data.results);
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
          }}
          style={{width: wp(45), height: hp(45), marginHorizontal: 2}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="chevron-back" size={30} color="#F03C02" />
        </TouchableOpacity>
        <TextInput
          style={styles.user_pass_line}
          placeholder=""
          onChangeText={(value) => cariFilem(value)}
        />
        <Icon2
          name="search"
          size={25}
          color="#F03C02"
          style={{marginRight: 8}}
        />
      </View>
      <View style={{margin: 10, alignItems: 'center'}}>
        <FlatList
          data={cari}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C0113',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: '#11000C',
  },
  user_pass_line: {
    marginHorizontal: 8,
    fontSize: 15,
    width: '77%',
    borderBottomWidth: 1,
    borderBottomColor: '#C21A01',
    color: '#F03C02',
  },
});

export default search;
