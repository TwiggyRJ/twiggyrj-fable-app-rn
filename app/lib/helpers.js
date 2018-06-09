import { Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function getIonicIcon(icon, outline) {
  if (Platform.OS === 'ios') {
    if (outline) {
      return `${Platform.OS}-${icon}-outline`;
    }
    return `${Platform.OS}-${icon}`;
  } else {
    return `md-${icon}`;
  }
}

export function getIcon(icon, outline) {
  if (outline) {
    return `${icon}-outline`;
  }
  return `${icon}`;
}

export function getPlatformSpecific(iosOption, androidOption) {
  if (Platform.OS === 'ios') {
    return iosOption;
  }
  return androidOption;
}
