import { registerWebModule, NativeModule } from 'expo';

import { ExpoSkeletonPlaceholderModuleEvents } from './ExpoSkeletonPlaceholder.types';

class ExpoSkeletonPlaceholderModule extends NativeModule<ExpoSkeletonPlaceholderModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoSkeletonPlaceholderModule);
