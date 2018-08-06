export const slugEncode = text =>
  encodeURI(text.replace(/\s+/gi, '-')).toLowerCase();
