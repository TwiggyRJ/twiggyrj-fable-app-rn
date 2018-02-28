export function truncateText(text, length) {
  if (text.length > length) {
    return text.substring(0, length) + "…";
  } else {
    return text;
  }
};

export function spacesToHyphens(str) {
  return str.replace(/\s+/g, '-');
}

export function hyphensToSpaces(str) {
  return str.replace(/-/g, ' ');
}
