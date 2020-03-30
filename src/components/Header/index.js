import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Input } from 'src/components/Forms/Input';
import styles from './Header.styles';

export const Header = memo(({ title, withSearch, withSearchBar, withCart }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {withSearchBar ? (
        <Icon name="bars" size={25} color={colors.white} />
      ) : (
        <Icon name="arrow-left" size={30} color={colors.white} />
      )}
      {title && (
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      )}
      {withSearch && (
        <Icon name="search" size={25} color={colors.white} style={styles.searchIcon} />
      )}
      {withCart && <Icon name="shopping-cart" size={25} color={colors.white} />}
    </View>
    {withSearchBar && (
      <View style={styles.searchRow}>
        <Input
          icon={<Icon name="search" size={25} color={colors.grey} />}
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor={colors.silverChalice}
        />
      </View>
    )}
  </View>
));

Header.displayName = 'Header';
