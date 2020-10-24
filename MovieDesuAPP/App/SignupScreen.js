import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '',
});

const SignupScreen = ({route, navigation}) => {
  const onFacebookButtonPress = async () => {
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
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Images/bck.jpg')}
        style={styles.image}>
        <View style={{flex: 1, backgroundColor: 'rgba(255,251,251,0.9)'}}>
          <ScrollView>
            <View style={{marginTop: 70}}>
              <Text
                style={{fontSize: 30, textAlign: 'center', color: '#F03C02'}}>
                {' '}
                SIGN UP FREE{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 40,
                marginBottom: 35,
                marginHorizontal: 15,
              }}>
              <TouchableOpacity
                onPress={() =>
                  onFacebookButtonPress().then((resp) => {
                    console.log('Sucess Login');
                  })
                }>
                <Image source={require('./assets/Images/facebook.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  onGoogleButtonPress().then(() => navigation.navigate('Home'))
                }>
                <Image source={require('./assets/Images/google.png')} />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'column', margin: 12}}>
              <Text style={styles.user_pass}> Email</Text>
              <TextInput style={styles.user_pass_line} placeholder="" />
              <Text style={styles.user_pass}> PASSWORD</Text>
              <TextInput style={styles.user_pass_line} placeholder="" />
            </View>
            <View style={{flexDirection: 'column', margin: 15}}>
              <View style={styles.SubmitButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.SubmitButtonText}> SIGN UP </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  paddingTop: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>Already have an account ?</Text>
                <Text> </Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('LoginScr')}>
                  <Text style={{color: '#6B0103'}}>Login!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
    marginTop: 30,
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

export default SignupScreen;
