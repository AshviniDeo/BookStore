import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React, {useState, useContext} from 'react';
import {styles} from './AuthStyle';
import {TEXT} from '../../res/localisation/Localisation-EN';
import Button from '../../components/button';
import {COLOR} from '../../res/GlobalStyle';
import * as Animatable from 'react-native-animatable';
import TextField from '../../components/textfield';
import {ActivityIndicator} from 'react-native-paper';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../../services/auth/index';

export const LogInScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const {login, googlelogin} = useContext(AuthContext);

  const validation = () => {
    setLoading(true);
    let valid = true;
    const temp = {};
    if (!userName) {
      valid = false;
      temp.userName = TEXT.VALID_EMAIL_ERROR_TEXT;
    }
    if (!password) {
      valid = false;
      temp.password = TEXT.VALID_PASSWORD_ERROR_TEXT;
    }
    setError(temp);
    return valid;
  };

  const setCatchError = code => {
    const temp = {};
    if (code === 'auth/user-not-found') {
      temp.userName = TEXT.INVALID_USER;
    }

    if (code === 'auth/wrong-password') {
      temp.password = TEXT.INVALID_PASSWORD;
    }

    if (code === 'auth/user-not-found') {
      temp.userName = TEXT.USER_NOT_FOUND;
    }

    setError(temp);
  };

  const handleSignIn = () => {
    setLoading(true);
    if (validation()) {
      login(userName, password, setCatchError);

      setLoading(false);
    }
  };
  const handleSignUp = () => {
    setLoading(true);
    navigation.navigate('Sign Up');
    setLoading(false);
  };
  const handleGoogleSignIn = () => {
    googlelogin();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text animation={'bounceIn'} style={styles.titleText}>
          {TEXT.WELCOME_MSG}
        </Animatable.Text>
      </View>
      <Animatable.View animation={'fadeInUpBig'} style={styles.footer}>
        <KeyboardAvoidingView>
          <ScrollView>
            <View>
              <TextField
                label={TEXT.EMAIL_LABEL}
                onChangeText={text => {
                  setUserName(text);
                }}
                secureTextEntry={false}
                placeholder={TEXT.EMAIL}
                errorText={error.userName}
              />

              <TextField
                label={TEXT.PASSWORD_LABEL}
                onChangeText={text => {
                  setPassword(text);
                }}
                secureTextEntry={true}
                placeholder={TEXT.PASSWORD}
                selectionColor={COLOR.primary}
                errorText={error.password}
              />
            </View>
            {loading ? (
              <View style={styles.button}>
                <ActivityIndicator size={'large'} color={COLOR.primary} />
              </View>
            ) : (
              <View style={styles.button}>
                <Button
                  title={TEXT.SIGNIN}
                  onClick={handleSignIn}
                  textColor={COLOR.white}
                />
                <Button
                  title={TEXT.SIGNUP}
                  onClick={handleSignUp}
                  textColor={COLOR.white}
                />
                <View style={styles.googleBtn}>
                  <GoogleSigninButton
                    onPress={handleGoogleSignIn}
                    style={styles.google}
                    size={GoogleSigninButton.Size.Wide}
                  />
                </View>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default LogInScreen;
