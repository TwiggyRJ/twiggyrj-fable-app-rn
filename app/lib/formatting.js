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

export function formatNumber(numberRaw) {
  const number = parseInt(numberRaw, 10);
  let calculatedNumber = 0;

  if (isNaN(number)) {
    return number;
  }

  if (number < 1000) {
    return number;
  }

  if (number < 1000000) {
    calculatedNumber = number / 1000;
    if (calculatedNumber % 1) {
      return `${(calculatedNumber).toFixed(1)}k`;
    }
    return `${(calculatedNumber)}k`;
  }

  if (number < 10000000) {
    calculatedNumber = number / 1000000;
    if (calculatedNumber % 1) {
      return `${(calculatedNumber).toFixed(1)}m`;
    }
    return `${(calculatedNumber)}m`;
  }

  if (number < 1000000000) {
    calculatedNumber = number / 1000000000;
    if (calculatedNumber % 1) {
      return `${(calculatedNumber).toFixed(1)}m`;
    }
    return `${(calculatedNumber)}m`;
  }

  if (number < 1000000000000) {
    calculatedNumber = number / 1000000000000;
    if (calculatedNumber % 1) {
      return `${(calculatedNumber).toFixed(1)}b`;
    }
    return `${(calculatedNumber)}b`;
  }

  return '1t+';
}
