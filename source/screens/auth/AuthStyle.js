import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLOR, FONTSIZES, MARGIN, PADDING, BUTTON} from '../../res/GlobalStyle';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLOR.primary,
  },
  header: {
    flex: 0.2,
    alignContent: 'center',
    justifyContent: 'flex-end',
    margin: MARGIN.margin,
  },
  footer: {
    padding: PADDING.padding,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLOR.white,
    borderTopLeftRadius: widthPercentageToDP('10%'),
    borderTopRightRadius: widthPercentageToDP('10%'),
  },
  titleText: {
    fontSize: FONTSIZES.titleText,
    fontWeight: 'bold',
    color: COLOR.white,
  },
  button: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: widthPercentageToDP('5%'),
    paddingTop: PADDING.padding,
  },
  googleBtn: {
    marginHorizontal: BUTTON.marginHorizontal,
    height: BUTTON.buttonHeight,
    borderRadius: BUTTON.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: BUTTON.marginVertical,
  },
  google: {
    marginHorizontal: BUTTON.marginHorizontal,
    height: BUTTON.buttonHeight,
  },
});
