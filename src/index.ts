// Reexport the native module. On web, it will be resolved to ExpoSkeletonPlaceholderModule.web.ts
// and on native platforms to ExpoSkeletonPlaceholderModule.ts
export { default } from './ExpoSkeletonPlaceholderModule';
export { default as ExpoSkeletonPlaceholderView } from './ExpoSkeletonPlaceholderView';
export * from  './ExpoSkeletonPlaceholder.types';
