import React, { memo, useCallback } from 'react';
import Swiper from 'react-native-swiper';

import { colors } from 'src/assets/styles/colors';
import { SwiperSlide } from './components';

export const ImageSwiper = memo(
  ({
    data,
    renderItem,
    slideContainerStyle,
    activeDotColor = colors.bostonBlue,
    keyExtractor = item => item.id,
    ...props
  }) => {
    const renderSlides = useCallback(
      (slides, renderer) =>
        slides.map(imageData => {
          const key = keyExtractor(imageData);

          return <SwiperSlide key={key} content={imageData} renderer={renderer} />;
        }),
      [keyExtractor]
    );

    return (
      <Swiper {...props} activeDotColor={activeDotColor}>
        {renderSlides(data, renderItem)}
      </Swiper>
    );
  }
);

ImageSwiper.displayName = 'ImageSwiper';
