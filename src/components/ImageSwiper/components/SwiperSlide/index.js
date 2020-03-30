import React, { memo } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import styles from './SwiperSlide.styles';

export const SwiperSlide = memo(({ content, renderer, containerStyle }) => (
  <View style={StyleSheet.flatten([styles.container, containerStyle])}>
    {renderer ? renderer(content) : <Image {...content} />}
  </View>
));

SwiperSlide.displayName = 'SwiperSlide';
