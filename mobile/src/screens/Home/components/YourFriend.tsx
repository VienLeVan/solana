import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {AvatarBg} from '~/assets/imgs';
import {avatar1} from '~/assets/imgs/avatar';
import {colors} from '~/constans/colors';
import fonts from '~/constans/fonts';
import {IStory} from '~/types';

export interface IProps {
  story: IStory;
}

const YourFriend = ({story}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.container} source={AvatarBg}>
        <Image
          source={story.avatarUrl}
          resizeMode="contain"
          style={styles.avatar}
        />
      </ImageBackground>
      <Text style={styles.name}>{story.name}</Text>
    </View>
  );
};

export default YourFriend;
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 56,
    height: 56,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.MAIN,
    borderRadius: 50,
  },
  name: {
    fontSize: 12,
    color: colors.WHITE,
    fontFamily: fonts.INTER,
    marginTop: 5,
  },
});
