import {
  StyleSheet,
  View,
  Platform,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';

const App = () => {
  return (
    <>
      <View style={styles.droidSafeArea}>
        <View style={styles.container}>
          <View style={styles.A}>
            <ImageBackground
              source={{uri: 'https://placekitten.com/202/300'}}
              resizeMode="cover"
              style={styles.catLogo}
              imageStyle={styles.rounding}
            >
              <Text style={styles.Slogan}>Nice Images</Text>
            </ImageBackground>
          </View>
        </View>

        <List />
      </View>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  catLogo: {
    width: '100%',
    height: '100%',
  },
  rounding: {
    borderBottomRightRadius: 50,
  },
  Images: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  container: {
    //flex: 20,
    height: 200,
    backgroundColor: 'white',
    margin: 2,
    // alignItems: 'stretch',
    // justifyContent: 'space-between',
    // padding: 20,
  },

  A: {
    flex: 1,
    backgroundColor: '#061178ff',
    // height: 50,
    // width: 50,
    position: 'relative',
  },
  Slogan: {
    /*
    backgroundColor: '#18aa5f00',
    //width: 200,
    position: 'absolute',
    bottom: 30,
    left: 30,
    padding: 5,
    fontSize: 24,
    color: 'white',
    */

    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(35,84,202,0.5)',
    padding: 5,
    marginTop: 130,
    position: 'absolute',
  },
  /*
  B: {
    // flex: 3,
    backgroundColor: '#8e111bff',
    height: 200,
    width: 200,
    alignSelf: 'center',
    overflow: 'hidden',
    borderEndWidth: 5,
    borderColor: 'red',
    borderBottomEndRadius: 20,
  },
  C: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#251eafff',
    // height: 50,
    // width: 50,
  },
  Vasen: {
    backgroundColor: 'green',
    // flex: 1,
    width: '50%',
  },
  Oikea: {
    backgroundColor: '#878d40',
    flex: 1,
  },
  T: {
    height: 50,
  },
  */
});

export default App;
