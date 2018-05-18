import { Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function getIcon(icon) {
  if (Platform.OS === 'ios') {
    return `${Platform.OS}-${icon}`;
  } else {
    return `md-${icon}`;
  }
}
