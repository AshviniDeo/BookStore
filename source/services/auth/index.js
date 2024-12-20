import React, {createContext, useState} from 'react';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [signIn, setSignIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        setSignIn,
        login: async (email, password, errorCallback) => {
          try {
            const userData = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            await AsyncStorage.setItem('uid', userData.user.uid);
            setSignIn(true);
          } catch (e) {
            console.log(e.code);
            errorCallback(e.code);
          }
        },
        register: async (
          email,
          password,
          callback,
          errorCallback,
          userName,
        ) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(success => {
                database()
                  .ref('/Users/' + success.user.uid + '/PersonalDetails/')
                  .set({
                    UserName: userName,
                    EmailId: email,
                  });
              });

            callback();
          } catch (e) {
            console.log(e.code);
            errorCallback(e.code);
          }
        },
        signout: async () => {
          try {
            await auth().signOut();
            await AsyncStorage.removeItem('uid');
            setSignIn(false);
          } catch (e) {
            console.log(e);
          }
        },
        googlelogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            await AsyncStorage.setItem('uid', idToken);
            setSignIn(true);
          } catch (error) {
            console.log(error);
          }
        },
        update: async bookData => {
          try {
            const data = {bookData};
            const uid = await AsyncStorage.getItem('uid');
            await database()
              .ref('/Users/' + uid + '/PersonalDetails/')
              .update(data);
          } catch (error) {
            console.log(error);
          }
        },
        fetch: async () => {
          try {
            const arr = [];
            const uid = await AsyncStorage.getItem('uid');
            await database()
              .ref('/Users/' + uid + '/PersonalDetails/')
              .get()
              .then(data => {
                const profileDetail = data.data();
                arr.push(profileDetail);
              });
            return arr;
          } catch (error) {
            console.log(error);
          }
        },
        getCurrentUser: async () => {
          try {
            return await GoogleSignin.getCurrentUser();
          } catch (error) {
            console.log(error);
          }
        },
        googleSignOut: async () => {
          try {
            await GoogleSignin.signOut();
            await AsyncStorage.clear();
            setSignIn(false);
          } catch (error) {
            console.error(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
