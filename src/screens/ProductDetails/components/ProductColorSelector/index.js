import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { SelectorOption } from './components';
import styles from './ProductColorSelector.styles';

export const ProductColorSelector = memo(({ options, containerStyle, optionStyle }) => {
  const [selectedOption, changeOption] = useState('');

  const handleOptionChange = useCallback(
    option => {
      if (selectedOption === option) {
        changeOption('');
        return;
      }

      changeOption(option);
    },
    [selectedOption]
  );

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {options.map(option => {
        const isSelected = selectedOption === option;

        return (
          <SelectorOption
            key={option}
            value={option}
            active={isSelected}
            style={StyleSheet.flatten([styles.option, optionStyle])}
            onSelect={handleOptionChange}
          />
        );
      })}
    </View>
  );
});

ProductColorSelector.displayName = 'ProductColorSelector';
