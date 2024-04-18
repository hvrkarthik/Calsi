import React, { ReactNode } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface RowProps extends ViewProps {
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.row, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default Row;