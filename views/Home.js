import {StyleSheet, View, Platform} from 'react-native';
import PropTypes from 'prop-types';

import List from '../components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.droidSafeArea}>
      <List navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
