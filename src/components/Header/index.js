import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import { Input } from 'src/components/Forms/Input';
import styles from './Header.styles';

export const Header = memo(({ title, withSearchBar }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {title && (
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      )}
    </View>
    {withSearchBar && (
      <View style={styles.searchRow}>
        <Input
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor={colors.silverChalice}
        />
      </View>
    )}
  </View>
));

Header.displayName = 'Header';
