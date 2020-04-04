import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Button, BackButton } from 'src/components';
import { Input } from 'src/components/Forms/Input';
import styles from './Header.styles';

export const Header = memo(
  ({
    transparent,
    title,
    withSearch,
    withSearchBar,
    withCart,
    onBackButtonPress,
    onDrawerToggle
  }) => (
    <View
      style={StyleSheet.flatten([
        styles.container,
        transparent ? styles.transparentContainer : null
      ])}
    >
      <View style={styles.row}>
        {withSearchBar ? (
          <Button
            type="clear"
            icon={<Icon name="bars" size={30} color={colors.white} />}
            containerStyle={styles.iconButton}
            onPress={onDrawerToggle}
          />
        ) : (
          <BackButton
            color={transparent ? colors.mineShaft : colors.white}
            containerStyle={styles.iconButton}
            onPress={onBackButtonPress}
          />
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
  )
);

Header.displayName = 'Header';
