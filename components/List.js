import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const List = () => {
  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                style={styles.picture}
                source={{uri: item.thumbnails.w160}}
              />
              <View style={styles.textArea}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  picture: {
    width: 100,
    height: '90%',
    flex: 1,
    padding: 2,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 18,
  },
  textArea: {
    flex: 1,
    padding: 10,
  },
});

export default List;
