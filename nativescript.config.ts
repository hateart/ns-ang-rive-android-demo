import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsangrivedemo',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;