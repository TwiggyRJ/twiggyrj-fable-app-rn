import { getApi } from '../config/settings';
import storiesJson from '../json/stories';

export function getAllStories() {
  try {
    const stories = storiesJson;
    return stories;
  } catch(e) {
    console.log('error')
    throw e;
  }
}

export async function searchStories(term) {

}
