import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {ListItem as ReListItem, Avatar, Text, Button} from '@rneui/themed';

// Rneui theme
const ListItem = ({singleMedia, navigation}) => {
  console.log(singleMedia);
  return (
    <ReListItem bottomDivider>
      <Avatar
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        size="large"
      />

      <ReListItem.Content>
        <ReListItem.Title>
          <Text>{singleMedia.title}</Text>
        </ReListItem.Title>
        <ReListItem.Subtitle>
          <Text>{singleMedia.description}</Text>
        </ReListItem.Subtitle>
      </ReListItem.Content>

      <Button
        title="View"
        onPress={() => {
          navigation.navigate('Single', singleMedia);
        }}
      />
    </ReListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
