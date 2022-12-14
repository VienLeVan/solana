import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import {
  FacebookIcon,
  InstagramIcon,
  LinkInIcon,
  ProfileBackground,
  ProfileBg,
  TwitterIcon,
} from '~/assets/imgs';
import {avatar1} from '~/assets/imgs/avatar';
import {colors} from '~/constans/colors';
import fonts from '~/constans/fonts';
import ContentTabs from './ContentTabs';

export interface IProps {}

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ProfileBg}
        resizeMode="cover"
        style={styles.imgBg}>
        <View style={styles.avatarOut}>
          <Image source={avatar1} style={styles.imgAvatar} resizeMode="cover" />
        </View>
      </ImageBackground>

      <View style={styles.info}>
        <Text style={styles.name}>Zohal alfinas</Text>
        <Text style={styles.description}>
          Hey 👋 I'm alfinas a leader specialising in growth for early-stage
          businesses...
        </Text>
        <View style={styles.socialContainer}>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkInIcon />
        </View>
        <View style={styles.profileIndicator}>
          <View style={styles.profileIndicatorColumn}>
            <Text style={styles.profileIndicatorTitle}>24</Text>
            <Text style={styles.profileIndicatorSubTitle}>Art Items</Text>
          </View>
          <View style={styles.profileIndicatorColumn}>
            <Text style={styles.profileIndicatorTitle}>1.5K</Text>
            <Text style={styles.profileIndicatorSubTitle}>Followers</Text>
          </View>
          <View style={styles.profileIndicatorColumn}>
            <Text style={styles.profileIndicatorTitle}>9</Text>
            <Text style={styles.profileIndicatorSubTitle}>Following</Text>
          </View>
        </View>
      </View>
      <ContentTabs />
    </View>
  );
};

export default ProfileView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.MAIN,
  },
  imgBg: {
    height: 180,
    width: '100%',
    zIndex: 1,
  },
  avatarOut: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: -40,
    elevation: 1000,
  },
  imgAvatar: {
    width: 88,
    height: 88,
    borderRadius: 88,
    borderColor: `${colors.CARD}`,
    borderWidth: 2,
  },
  info: {
    minHeight: 130,
    alignItems: 'center',
    marginTop: 40,
    paddingTop: 8,
  },
  content: {
    width: '100%',
    flex: 1,
  },
  name: {
    color: colors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: colors.WHITE,
    fontFamily: fonts.INTER,
    fontSize: 14,
    paddingHorizontal: 40,
    textAlign: 'center',
    marginTop: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
  profileIndicator: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginTop: 24,
  },
  profileIndicatorColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIndicatorTitle: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileIndicatorSubTitle: {
    color: colors.WHITE,
    fontSize: 14,
    paddingTop: 5,
  },
});
