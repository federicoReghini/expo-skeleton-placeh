import * as React from 'react';

import { ExpoSkeletonPlaceholderViewProps } from './ExpoSkeletonPlaceholder.types';

export default function ExpoSkeletonPlaceholderView(props: ExpoSkeletonPlaceholderViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
