import React, { memo } from 'react';
import { Text } from 'react-native';

import { Card, DataRow } from 'src/components';
import styles from './PriceDetails.styles';

export const PriceDetails = memo(({ total, totalQuantity }) => {
  const rows = [
    {
      id: 'price',
      label: <>Price ({<Text style={styles.itemsAmount}>{totalQuantity}</Text>} items)</>,
      value: total
    },
    {
      id: 'delivery',
      label: 'Delivery',
      value: '$1'
    },
    {
      id: 'tax',
      label: 'Tax (2%)',
      value: '$4.44'
    }
  ];

  return (
    <Card activeOpacity={1} style={styles.container}>
      <Text style={styles.title}>Price Details</Text>
      {rows.map(({ id, ...row }) => (
        <DataRow key={id} {...row} style={styles.detailRow} />
      ))}
      <DataRow label="Amount Payable" value={total} style={styles.total} />
    </Card>
  );
});

PriceDetails.displayName = 'PriceDetails';
