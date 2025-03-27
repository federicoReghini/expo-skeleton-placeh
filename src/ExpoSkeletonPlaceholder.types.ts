import type { DimensionValue, ViewStyle } from "react-native";

export type OnLoadEventPayload = {
  url: string;
};

export type ExpoSkeletonPlaceholderModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type SkeletonPlaceholderProps = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  borderRadius?: number;
  style?: ViewStyle;
  colors?: [string, string, string];
  duration?: number;
};
