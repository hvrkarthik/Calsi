import React, { ReactNode, FC } from "react";
import { View, ViewProps } from "react-native";

interface RowProps extends ViewProps {
  children: ReactNode;
}

const Row: FC<RowProps> = ({ children, ...props }) => (
  <View style={{ flexDirection: "row", ...props.style }}>{children}</View>
);

export default Row;
