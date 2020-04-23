import React, { memo, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import isEmpty from 'lodash/isEmpty';

import { ScreenName } from 'src/constants/navigationScreenNames';
import styles from './Map.styles';

export const Map = memo(({ location, style, ...props }) => {
  const [coordinate, setCoordinate] = useState(location);
  const hasCoordinateToDisplay = !isEmpty(coordinate);

  useEffect(() => {
    if (hasCoordinateToDisplay) {
      return;
    }

    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
      setCoordinate({
        latitude,
        longitude
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasCoordinateToDisplay) {
    return null;
  }

  const initialRegion = {
    ...coordinate,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  };

  return (
    <MapView
      {...props}
      initialRegion={initialRegion}
      style={StyleSheet.flatten([styles.container, style])}
    >
      <Marker coordinate={coordinate} />
    </MapView>
  );
});

Map.displayName = ScreenName.Map;
