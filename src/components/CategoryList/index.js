import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import { withMemo } from 'src/HOCs';
import { ListRefreshControl } from 'src/components';
import { CategoryItem } from './components';
import styles from './CategoryList.styles';

export const CategoryList = withMemo(
  ({ refreshing, onProductPress, onCategoryPress, onEndReached, onRefresh, ...props }) => {
    const [listHasBeenScrolled, toggleListScrollingFlag] = useState(false);

    const renderCategoryItem = useCallback(
      ({ item }) => (
        <CategoryItem {...item} onCategoryPress={onCategoryPress} onProductPress={onProductPress} />
      ),
      [onCategoryPress, onProductPress]
    );

    const handleInitialScrollStart = useCallback(() => {
      if (listHasBeenScrolled) {
        return;
      }

      toggleListScrollingFlag(true);
    }, [listHasBeenScrolled]);

    const handleListEndReached = useCallback(
      ({ distanceFromEnd }) => {
        if (!listHasBeenScrolled) {
          return;
        }

        onEndReached({ distanceFromEnd });
      },
      [listHasBeenScrolled, onEndReached]
    );

    const keyExtractor = useCallback(({ id }) => id, []);

    return (
      <FlatList
        {...props}
        windowSize={5}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderCategoryItem}
        keyExtractor={keyExtractor}
        refreshControl={<ListRefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onScrollBeginDrag={handleInitialScrollStart}
        onEndReached={handleListEndReached}
      />
    );
  }
);

CategoryList.displayName = 'CategoryList';
