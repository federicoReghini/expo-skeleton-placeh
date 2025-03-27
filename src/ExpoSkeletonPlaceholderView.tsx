import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSkeletonPlaceholderViewProps } from './ExpoSkeletonPlaceholder.types';

const NativeView: React.ComponentType<ExpoSkeletonPlaceholderViewProps> =
  requireNativeView('ExpoSkeletonPlaceholder');

export default function ExpoSkeletonPlaceholderView(props: ExpoSkeletonPlaceholderViewProps) {
  return <NativeView {...props} />;
}
