import React from 'react';
import { Text } from 'react-native';

export const Heading = ({ children, ...props }: any) => {
  return <Text {...props}>{children}</Text>;
};