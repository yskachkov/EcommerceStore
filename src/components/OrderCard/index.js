import React, { memo } from 'react';

import { Card, DataRow } from 'src/components';
import styles from './OrderCard.styles';

export const OrderCard = memo(({ id, date, status, productAmount, total, ...props }) => {
  const rows = [
    {
      id: 'order-id',
      label: 'Order Id',
      value: `OD ${id}`
    },
    {
      id: 'order-date',
      label: 'Order Date',
      value: date
    },
    {
      id: 'status',
      label: 'Status',
      value: status
    },
    {
      id: 'product-amount',
      label: 'Product amount',
      value: productAmount
    },
    {
      id: 'total-amount',
      label: 'Total Amount',
      value: total
    }
  ];

  return (
    <Card {...props} style={styles.container}>
      {rows.map(({ id, ...row }, index) => {
        const isNotLastElement = index !== rows.length - 1;
        const rowStyle = isNotLastElement ? styles.row : null;

        return (
          <DataRow
            {...row}
            key={id}
            labelStyle={styles.rowLabel}
            valueStyle={styles.rowValue}
            style={rowStyle}
          />
        );
      })}
    </Card>
  );
});

OrderCard.displayName = 'OrderCard';
