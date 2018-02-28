import { getApi } from '../config/settings';
import storiesJson from '../json/stories';

export async function getAllStories() {
  try {
    const stories = storiesJson;
    return stories;
  } catch(e) {
    throw e;
  }
}

export async function searchStories(term) {

}
