import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Pressable,
} from 'react-native';
import {
  deleteIcon,
  marketPlaceIcon,
  openSeaIcon,
  phantomIcon,
} from '~/assets/imgs/actions';
import {colors} from '~/constans/colors';

const {width} = Dimensions.get('window');

export interface IProps {
  photoPath: string;
  onRemove?: () => void;
}

const PhotoViewer = ({photoPath, onRemove}: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: Platform.OS === 'ios' ? photoPath : `file://${photoPath}`,
        }}
        style={styles.img}
      />
      <View style={styles.actionContainer}>
        <View style={[styles.actionBtn, styles.action1]}>
          <Image
            source={openSeaIcon}
            resizeMode="cover"
            style={styles.imgAction}
          />
        </View>
        <View style={[styles.actionBtn, styles.action2]}>
          <Image
            source={phantomIcon}
            resizeMode="cover"
            style={styles.imgAction}
          />
        </View>
        <View style={[styles.actionBtn, styles.action3]}>
          <Image
            source={marketPlaceIcon}
            resizeMode="cover"
            style={styles.imgAction}
          />
        </View>
        <View style={[styles.actionBtn]}>
          <Pressable onPress={onRemove}>
            <Image
              source={deleteIcon}
              resizeMode="cover"
              style={[styles.imgAction, {width: 20, height: 25}]}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PhotoViewer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  actionContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20,
  },
  actionBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.WHITE,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: colors.MAIN,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
  },
  action1: {
    bottom: 40,
    left: width * 0.25,
  },
  action2: {
    bottom: 100,
  },
  action3: {
    bottom: 40,
    right: width * 0.25,
  },
  imgAction: {
    width: 48,
    height: 48,
  },
});
