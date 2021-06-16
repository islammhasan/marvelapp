import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Modal from 'react-native-modal';

const fullWidth = Dimensions.get('screen').width;
const fullHeight = Dimensions.get('screen').height;

export const ImageZoomModal = ({isVisible, onClose, img}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={'zoomIn'}
      style={styles.modalStyle}>
      <ImageZoom
        imageWidth={fullWidth}
        imageHeight={fullHeight}
        cropWidth={fullWidth}
        cropHeight={fullHeight}
        onSwipeDown={onClose}
        enableSwipeDown>
        <Image
          resizeMode={'contain'}
          source={{uri: img}}
          style={styles.imgStyle}
        />
      </ImageZoom>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  imgStyle: {
    width: fullWidth,
    height: fullHeight,
  },
  modalStyle: {
    margin: 0,
  },
});
