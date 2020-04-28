import React, { memo, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import isEqual from 'lodash/isEqual';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { DEFAULT_LOCATION } from './constants';
import styles from './Map.styles';

export const Map = memo(
  ({
    route: {
      params: { data: { location } = { location: DEFAULT_LOCATION } }
    },
    style,
    ...props
  }) => {
    const [coordinate, setCoordinate] = useState(location);

    useEffect(() => {
      const hasCoordinateToDisplay = !isEqual(location, DEFAULT_LOCATION);

      if (hasCoordinateToDisplay) {
        return;
      }

      Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
        setCoordinate({
          ...coordinate,
          latitude,
          longitude
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <MapView {...props} region={coordinate} style={StyleSheet.flatten([styles.container, style])}>
        <Marker coordinate={coordinate} />
      </MapView>
    );
  }
);

Map.displayName = ScreenName.Map;
