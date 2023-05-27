import { Text} from 'react-native';
import { useState } from 'react';

import React from 'react';
import { FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const renderItem = ({ item }) => {
  return <Text>{item.title}</Text>;
};

const Test = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Test;

