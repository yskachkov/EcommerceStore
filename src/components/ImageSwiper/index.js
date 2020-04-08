import React, { memo, useMemo, useCallback } from 'react';
import Swiper from 'react-native-swiper';

import { colors } from 'src/assets/styles/colors';
import { SwiperSlide } from './components';
import styles from './ImageSwiper.styles';

export const ImageSwiper = memo(
  ({
    images,
    renderItem,
    slideContainerStyle,
    activeDotColor = colors.bostonBlue,
    keyExtractor = item => item.source.uri,
    ...props
  }) => {
    const slideImages = useMemo(
      () =>
        images.map(uri => ({
          source: {
            uri
          },
          style: styles.slideImage
        })),
      [images]
    );

    const renderSlides = useCallback(
      (images, renderer) =>
        images.map(imageData => {
          const key = keyExtractor(imageData);

          return <SwiperSlide key={key} content={imageData} renderer={renderer} />;
        }),
      [keyExtractor]
    );

    return (
      <Swiper {...props} activeDotColor={activeDotColor}>
        {renderSlides(slideImages, renderItem)}
      </Swiper>
    );
  }
);

ImageSwiper.displayName = 'ImageSwiper';
