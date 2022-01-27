import React, {useState, useContext} from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {styles} from '../AuthStyle';
import * as Animatable from 'react-native-animatable';
import {COLOR} from '../../../res/GlobalStyle';
import {TEXT} from '../../../res/localisation/Localisation-EN';
import Button from '../../../components/button';
import TextField from '../../../components/textfield';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from '../../../services/auth/index';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const {register} = useContext(AuthContext);

  const validation = () => {
    const emailRegx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let valid = true;
    const temp = {};
    if (!userName) {
      valid = false;
      temp.userName = 'Enter Username (mandatory)*';
    }

    if (!email) {
      valid = false;
      temp.email = 'Enter Email (mandatory)*';
    }
    if (!emailRegx.test(email)) {
      valid = false;
      temp.email = 'Enter valid EmailID';
    }

    if (!password) {
      valid = false;
      temp.password = 'Enter Password (mandatory)*';
    }
    if (!confirmPassword) {
      valid = false;
      temp.confirmPassword = 'Enter Confirm Password (mandatory)*';
    }
    if (confirmPassword !== password) {
      valid = false;
      temp.confirmPassword = 'Do not match Password ';
    }
    setError(temp);
    return valid;
  };

  const toNavigateHome = () => {
    navigation.navigate('Sign In');
  };
  const setCatchError = code => {
    const temp = {};
    if (code === 'auth/email-already-in-use') {
      temp.email = 'Email alredy in used';
    }
    setError(temp);
  };

  const handleRegister = () => {
    setLoading(true);
    if (validation()) {
      register(email, password, toNavigateHome, setCatchError, userName);
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text animation={'bounceIn'} style={styles.titleText}>
          {TEXT.SIGNUP}
        </Animatable.Text>
      </View>
      <Animatable.View animation={'fadeInUpBig'} style={styles.footer}>
        <KeyboardAvoidingView>
          <ScrollView>
            <View>
              <TextField
                label={TEXT.USERNAME_LABEL}
                onChangeText={text => {
                  setUserName(text);
                }}
                secureTextEntry={false}
                placeholder={TEXT.USERNAME}
                value={userName}
              />
              <TextField
                label={TEXT.EMAIL_LABEL}
                onChangeText={text => {
                  setEmail(text);
                }}
                secureTextEntry={false}
                placeholder={TEXT.EMAIL}
                value={email}
              />

              <TextField
                label={TEXT.PASSWORD_LABEL}
                onChangeText={text => {
                  setPassword(text);
                }}
                secureTextEntry={true}
                placeholder={TEXT.PASSWORD}
                selectionColor={COLOR.primary}
                value={password}
              />
              <TextField
                label={TEXT.CONFIRM_PASSWORD_LABEL}
                onChangeText={text => {
                  setConfirmPassword(text);
                }}
                secureTextEntry={true}
                placeholder={TEXT.CONFIRM_PASSWORD}
                selectionColor={COLOR.primary}
                value={confirmPassword}
                errorText={error.confirmPassword}
              />
            </View>
            {loading ? (
              <View style={styles.button}>
                <ActivityIndicator size={'small'} color={COLOR.primary} />
              </View>
            ) : (
              <View style={styles.button}>
                <Button
                  title={TEXT.REGISTER}
                  onClick={handleRegister}
                  textColor={COLOR.white}
                />
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default RegisterScreen;
