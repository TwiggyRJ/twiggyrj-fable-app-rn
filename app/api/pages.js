import { getApi } from '../config/settings';
import pagesJson from '../json/pages';

export function getPage(pageId) {
  try {
    const page = pagesJson[pageId];
    return page;
  } catch (e) {
    console.log('error')
    throw e;
  }
}
