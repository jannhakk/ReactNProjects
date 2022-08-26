import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';
  console.log(props.singleMedia);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground
          style={styles.picture}
          imageStyle={styles.rounding}
          source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}}
        />
        <View style={styles.textArea}>
          <Text style={styles.title}>{props.singleMedia.title}</Text>
          <Text style={styles.description}>
            {props.singleMedia.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#143565',
    //backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  picture: {
    width: 150,
    height: '100%',
    flex: 1,
    padding: 2,
  },
  rounding: {
    borderBottomLeftRadius: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 24,
  },
  description: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 18,
  },
  textArea: {
    flex: 1,
    padding: 10,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
