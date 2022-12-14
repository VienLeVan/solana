import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Camera, PhotoFile, useCameraDevices} from 'react-native-vision-camera';
import {CameraIcon} from '~/assets/imgs';
import {useIsAppForeground} from '~/hooks/useIsAppForeground';
import PhotoViewer from '../../components/PhotoViewer';

export interface IProps {}

const TakePhotoView = () => {
  const devicesA = useCameraDevices();
  const device = devicesA.back;
  const camera = useRef<Camera>(null);
  const isAppForeground = useIsAppForeground();
  const [photo, setPhoto] = React.useState<PhotoFile>();

  const handleTakeAPhoto = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    let isAuth = cameraPermission === 'authorized';
    if (cameraPermission === 'not-determined') {
      const newCameraPermission = await Camera.requestCameraPermission();
      isAuth = newCameraPermission === 'authorized';
    } else if (cameraPermission === 'denied') {
      Alert.alert(
        'It is helpful if you allow camera access to perform this action.',
      );
      return;
    }
    if (isAuth && camera) {
      const photoTemp = await camera.current?.takePhoto({
        flash: 'auto',
      });
      setPhoto(photoTemp);
    }
  };

  if (device == null) {
    return (
      <View style={styles.container}>
        <Button title="Take a photo" onPress={handleTakeAPhoto} />
      </View>
    );
  }

  if (photo) {
    return (
      <PhotoViewer
        photoPath={photo.path}
        onRemove={() => setPhoto(undefined)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isAppForeground}
        photo={true}
        ref={camera}
      />

      <View style={styles.photoContainer}>
        <View style={styles.btnTakePhotoWrapper}>
          <TouchableOpacity onPress={handleTakeAPhoto}>
            <CameraIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TakePhotoView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    ...StyleSheet.absoluteFillObject,
    bottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnTakePhotoWrapper: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255, 0.9)',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
