import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = ({route, navigation}) => {
  const [btn, setBtn] = useState(false);
  const [btn2, setBtn2] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Images/bck.jpg')}
        style={styles.image}>
        <View style={{flex: 1, backgroundColor: 'rgba(28,1,19,0.8)'}}>
          <View style={{justifyContent: 'center', marginTop: 80}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./assets/Images/movielogo.png')}
                style={{width: wp('50'), height: hp('12')}}
              />
            </View>

            <View style={{alignItems: 'center', marginTop: 80}}>
              {/* <View
                onPress={() => navigation.navigate('LoginScr')}
                style={styles.SubmitButton}>
                <Text style={styles.SubmitButtonText}> LOGIN </Text>
              </View> */}

              {/* <TouchableOpacity
                onPress={() => navigation.navigate('SignupScr')}
                style={styles.SubmitButton}>
                <Text style={styles.SubmitButtonText}> SIGNUP </Text>
              </TouchableOpacity> */}
              <Pressable
                onPressIn={() => setBtn(true)}
                onPressOut={() => {
                  setBtn(false);
                  navigation.navigate('LoginScr');
                }}>
                <View style={btn ? styles.SubmitButton2 : styles.SubmitButton}>
                  <Text
                    style={
                      btn ? styles.SubmitButtonText2 : styles.SubmitButtonText
                    }>
                    {' '}
                    LOGIN{' '}
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPressIn={() => setBtn2(true)}
                onPressOut={() => {
                  setBtn2(false);
                  navigation.navigate('SignupScr');
                }}>
                <View style={btn2 ? styles.SubmitButton2 : styles.SubmitButton}>
                  <Text
                    style={
                      btn2 ? styles.SubmitButtonText2 : styles.SubmitButtonText
                    }>
                    {' '}
                    SIGN UP{' '}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  SubmitButton: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 8,
    width: wp('50'),
    height: hp('8'),
    borderColor: '#F03C02',
    borderWidth: 1,
  },
  SubmitButton2: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 8,
    width: wp('50'),
    height: hp('8'),
    backgroundColor: '#6B0103',
    justifyContent: 'center',
  },
  SubmitButtonText: {
    color: '#6B0103',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AnticSlab-Regular',
  },
  SubmitButtonText2: {
    color: '#F03C02',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AnticSlab-Regular',
  },
});

export default Login;
