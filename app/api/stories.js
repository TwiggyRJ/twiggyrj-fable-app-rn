import { getApi } from '../config/settings';
import storiesJson from '../json/stories';

export function getAllStories() {
  try {
    const stories = storiesJson;
    return stories;
  } catch(e) {
    console.log('error');
    throw e;
  }
}

export function getAuthorStories(author) {
  try {
    const stories = [];
    //alert(author)
    if (author === 2) {
      stories.push({
        "id": "4",
        "title": "The Mystery of the Great Airship",
        "cover": "https://i.imgur.com/RIhHH2f.jpg",
        "author": {
          "id": "2",
          "name": "Serene Andrade",
          "avatar": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31408136_10214186196906969_7459980734246158336_n.jpg?_nc_cat=0&oh=27a844cf4be1d64d4f7b7acf5cc44701&oe=5B7BBD5E"
        },
        "genre": [
          "Sci-Fi",
          "Mystery",
        ],
        "type": "Game",
        "views": 1000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
        "published": "2013-02-04T18:35:24+00:00",
        "last_modified": "2013-02-04T18:35:24+00:00",
        "edition": "First Edition"
      });
      return stories;
    }
    stories.push({
      "id": "5",
      "title": "Case 01 - The Making of a Great Detective",
      "cover": "https://images.alphacoders.com/125/thumb-1920-125091.jpg",
      "author": {
        "id": "3",
        "name": "Aaron Fryer",
        "avatar": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23916021_10155128635868994_2293259360887463363_n.jpg?_nc_cat=0&oh=9665ea2b01f7ce2b9b38b294c859267c&oe=5B7F56B9"
      },
      "genre": [
        "Murder Mystery",
      ],
      "type": "Game",
      "views": 3500,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
      "published": "2018-05-20T18:35:24+00:00",
      "last_modified": "2018-05-23T18:35:24+00:00",
      "edition": "First Edition"
    });

    stories.push({
      "id": "6",
      "title": "Case 02 - The Eye Glass Murderer",
      "cover": "http://blog.brycecampbell.me/user/files/daisuke_torakura.jpg",
      "author": {
        "id": "3",
        "name": "Aaron Fryer",
        "avatar": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23916021_10155128635868994_2293259360887463363_n.jpg?_nc_cat=0&oh=9665ea2b01f7ce2b9b38b294c859267c&oe=5B7F56B9"
      },
      "genre": [
        "Murder Mystery",
      ],
      "type": "Game",
      "views": 2409,
      "description": "A famous vampire writer who used to be a romance writer, and whom Kogoro reads, invites Kogoro to his estate for discussion on his next vampire novel and to spy on his wife. However, when the writer ends up dead and snow prevents the cops from coming Kogoro is forced to re-evaluate the possibilities of vampires being real.",
      "published": "2018-06-10T18:35:24+00:00",
      "last_modified": "2018-06-10T18:35:24+00:00",
      "edition": "First Edition"
    });
  
    stories.push(
      {
        "id": "7",
        "title": "Case 03 - The Mystery of the Contessa II",
        "cover": "https://img.youtube.com/vi/QGkjUXcp1Js/maxresdefault.jpg",
        "author": {
          "id": "3",
          "name": "Aaron Fryer",
          "avatar": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23916021_10155128635868994_2293259360887463363_n.jpg?_nc_cat=0&oh=9665ea2b01f7ce2b9b38b294c859267c&oe=5B7F56B9"
        },
        "genre": [
          "Murder Mystery",
        ],
        "type": "Game",
        "views": 1350,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
        "published": "2018-07-16T12:25:24+00:00",
        "last_modified": "2018-07-16T12:25:24+00:00",
        "edition": "First Edition"
      }
    );

    stories.push(
      {
        "id": "8",
        "title": "The Lost Treasure of the Forbidden Temple",
        "cover": "https://orig00.deviantart.net/63d7/f/2014/174/d/e/ancient_ruined_temple_by_ice_wolf_elemental-d7np6iy.jpg",
        "author": {
          "id": "3",
          "name": "Aaron Fryer",
          "avatar": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23916021_10155128635868994_2293259360887463363_n.jpg?_nc_cat=0&oh=9665ea2b01f7ce2b9b38b294c859267c&oe=5B7F56B9"
        },
        "genre": [
          "Adventure",
          "Dungeons",
          "Fantasy",
        ],
        "type": "Game",
        "views": 649,
        "description": "Set in a far away land where fantasy and adventure go hand in hand. A great adventure with untold riches are ahead, are you brave enough to discover it?",
        "published": "2018-07-16T12:25:24+00:00",
        "last_modified": "2018-07-16T12:25:24+00:00",
        "edition": "First Edition"
      }
    );

    return stories;
  } catch(e) {
    console.log('error');
    throw e;
  }
}

export function getLandingStories() {
  try {
    const stories = storiesJson;
    const orderedStories = {
      featured: stories.slice(0, 1).concat(stories.slice(3, 5).concat(stories[7])),
      all: stories,
    };

    return orderedStories;
  } catch(e) {
    console.log('error');
    throw e;
  }
}

export async function searchStories(term) {

}
