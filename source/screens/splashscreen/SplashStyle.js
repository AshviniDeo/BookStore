import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COLOR} from '../../res/GlobalStyle';

export const styles = StyleSheet.create({
  background: {
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    height: heightPercentageToDP('20%'),
    width: widthPercentageToDP('50%'),
    borderRadius: widthPercentageToDP('25%'),
    alignSelf: 'center',
  },
  text: {
    fontSize: widthPercentageToDP('10%'),
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLOR.darkRed,
  },
});
