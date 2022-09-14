import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';

const List = ({navigation}) => {
  const {update} = useContext(MainContext);
  const {mediaArray} = useMedia(update);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <ListItem singleMedia={item} navigation={navigation} />
      )}
    />
  );
};

List.propTypes = {
  navigation: PropTypes.object,
};

export default List;

/*
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const apiUrl = 'https://media.mw.metropolia.fi/wbma/';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (mediaItem) => {
        const response = await fetch(apiUrl + 'media/' + mediaItem.file_id);
        return await response.json();
      });

      setMediaArray(await Promise.all(allMediaData));
    } catch (error) {
      console.log('media fetch failed', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
*/
