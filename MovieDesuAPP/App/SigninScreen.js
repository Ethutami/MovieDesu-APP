import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const SigninScreen = ({route, navigation}) => {
  const onFacebookButtonPress = async () => {
    // const result = await LoginManager.logInWithPermissions(['public_profile']);

    // if (result.isCancelled) {
    //   throw 'User cancelled the login process';
    // }
    // const data = await AccessToken.getCurrentAccessToken();

    // if (!data) {
    //   throw 'Something went wrong obtaining access token';
    // }

    // // Create a Firebase credential with the AccessToken
    // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   data.accessToken,
    // );

    // Sign-in the user with the credential
    // return auth().signInWithCredential(facebookCredential);
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          navigation.navigate('Home');
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/Images/bck.jpg')}
        style={styles.image}>
        <View style={{flex: 1, backgroundColor: 'rgba(255,251,251,0.9)'}}>
          <ScrollView>
            <View
              style={{marginTop: 70, marginBottom: 80, alignItems: 'center'}}>
              <Image
                source={require('./assets/Images/logo.png')}
                style={{width: 50, height: 50}}
              />
            </View>

            <View style={{margin: 12}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.user_pass}> EMAIL</Text>
                <TextInput style={styles.user_pass_line} placeholder="" />
                <Text style={styles.user_pass}> PASSWORD</Text>
                <TextInput style={styles.user_pass_line} placeholder="" />
              </View>

              <Text
                style={{
                  color: '#6B0103',
                  textAlign: 'right',
                  marginEnd: 15,
                  paddingTop: 10,
                }}>
                Forgot Password ?
              </Text>
            </View>
            <View style={{flexDirection: 'column', margin: 15}}>
              <View style={styles.SubmitButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.SubmitButtonText}> Log In </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{textAlign: 'center', paddingTop: 30, color: '#F03C02'}}>
                Or Login With
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 35,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    onFacebookButtonPress().then((resp) => {
                      console.log('Sucess Login');
                    })
                  }>
                  <Image source={require('./assets/Images/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/Images/google.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  user_pass: {
    padding: 15,
    color: '#F03C02',
  },
  user_pass_line: {
    marginVertical: 8,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    fontSize: 15,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#C21A01',
  },
  SubmitButton: {
    marginTop: 40,
    paddingVertical: 10,
    borderRadius: 8,
    width: wp('50'),
    height: hp('8'),
    backgroundColor: '#6B0103',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  SubmitButtonText: {
    color: '#F03C02',
    textAlign: 'center',

    fontSize: 20,
    fontFamily: 'AnticSlab-Regular',
  },
});

export default SigninScreen;
