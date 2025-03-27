import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSkeletonPlaceholderModuleEvents } from './ExpoSkeletonPlaceholder.types';

declare class ExpoSkeletonPlaceholderModule extends NativeModule<ExpoSkeletonPlaceholderModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSkeletonPlaceholderModule>('ExpoSkeletonPlaceholder');
