const stories = [
  {
    "id": "1",
    "title": "Much ado about Nothing",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51WvFNzw89L._SX371_BO1,204,203,200_.jpg",
    "author": {
      "id": "1",
      "name": "William Shakespeare",
      "avatar": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
    },
    "genre": [
      "Classical",
      "Play",
      "Theatre",
    ],
    "type": "Classic",
    "views": 1000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
    "published": "2013-02-04T18:35:24+00:00",
    "last_modified": "2013-02-04T18:35:24+00:00",
    "edition": "First Edition"
  },
  {
    "id": "2",
    "title": "Taming of the Shrew",
    "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThhMmMxOTQtNzM5YS00MTc0LWEzMjUtYjM3MDJlOTM5OTg4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "author": {
      "id": "1",
      "name": "William Shakespeare",
      "avatar": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
    },
    "genre": [
      "Classical",
      "Play",
      "Theatre",
    ],
    "type": "Classic",
    "views": 1000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
    "published": "2013-02-04T18:35:24+00:00",
    "last_modified": "2013-02-04T18:35:24+00:00",
    "edition": "First Edition"
  },
  {
    "id": "3",
    "title": "Macbeth",
    "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6CCymUrtUwZLdv8iAr0X-tOU2juRKqYC2vMSGV41kRJzzCr5kg",
    "author": {
      "id": "1",
      "name": "William Shakespeare",
      "avatar": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
    },
    "genre": [
      "Classical",
      "Play",
      "Theatre",
    ],
    "type": "Classic",
    "views": 1000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu nisl velit. Morbi ante elit, efficitur non sapien nec, mattis dignissim nisi. Proin aliquam dictum mauris, sit amet suscipit ligula vulputate nec.",
    "published": "2013-02-04T18:35:24+00:00",
    "last_modified": "2013-02-04T18:35:24+00:00",
    "edition": "First Edition"
  },
  {
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
  },
  {
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
  },
  {
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
  },
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
  },
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
  },
];

export default stories;
