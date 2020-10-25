import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(28,1,19,0.7)',
      }}>
      <Text style={{color: '#F03C02'}}>MovieDesu v6.01 by :</Text>
      <Image
        source={require('./assets/Images/eth.png')}
        style={{width: wp(80), height: hp(10), margin: 30}}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Icon
          name="facebook"
          size={35}
          color="#F03C02"
          onPress={() =>
            Linking.openURL(
              'https://web.facebook.com/Ethutami-108360424396536/',
            )
          }
        />

        <Icon
          name="instagram"
          size={35}
          color="#F03C02"
          onPress={() =>
            Linking.openURL(
              'https://instagram.com/ethutami?igshid=ie2zt2ggjs2w',
            )
          }
        />
      </View>
    </View>
  );
}
