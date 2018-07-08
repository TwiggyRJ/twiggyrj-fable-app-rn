const pages = [
  {
    id: '1',
    title: 'The Adventure Begins',
    number: '1',
    components: [
      {
        id: 'ae0244-rg24551-df783',
        type: 'text',
        content: 'You wake up from your slumber, the strong and dazzling sun blinds you as you wake. You climb out of the old straw bed and gaze out into the rustic village of Grimmewater. The villagers were taking out their cows and sheep out into the green planes just south of Bright Peak Mountain.',
      },
      {
        id: 'ef0412-gs63456-ik09367',
        type: 'image',
        src: 'http://pre12.deviantart.net/be61/th/pre/f/2013/349/2/0/bedroom_by_anthonyavon-d6y2slp.jpg',
      },
      {
        id: 'uk5678-qw02874-ml6363',
        type: 'text',
        content: 'As you gaze you see your destination, the old Nordic ruin at the base of the mountain. As you get ready to go Old Lady Jess bursts in and asks for the rent money…',
      },
      {
        id: 'rf04582-gf03582-pl0894',
        type: 'dialogue',
        content: [
          {
            id: 'dialogue-df2321-p1-d1',
            align: 'left',
            speaker: 'Old Lady Jess',
            image: 'https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Old_lady.jpg/revision/latest?cb=20140105001454',
            dialogue: 'You owe me rent money for the last week! Pay up!',
          },
          {
            id: 'dialogue-df2321-p2-d1',
            align: 'right',
            speaker: 'The Hero',
            image: 'http://www.creativeuncut.com/gallery-20/art/at-mimi-houllier-von-schwarzlang.jpg',
            dialogue: 'Ok, I will just get it...',
          },
          {
            id: 'dialogue-df2321-p1-d2',
            align: 'left',
            speaker: 'Old Lady Jess',
            image: 'https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Old_lady.jpg/revision/latest?cb=20140105001454',
            dialogue: 'Don\'t even think about running away...',
          },
        ],
      },
      {
        id: 'ef8463-bf35324-th35463',
        type: 'interaction',
        description: 'You pause, you was tempted to save a few gold pieces but you could do the honorable thing.',
        options: [
          {
            id: 'op3424',
            option: 'Run away',
            type: 'dice',
            criteria: {
              success: 7,
              diceSides: 6,
              numberOfDice: 2,
            },
            success: 3,
          },
          {
            id: 'op3981',
            option: 'Pay',
            type: 'progress',
            success: null,
          },
        ],
      },
    ],
  },
];

export default pages;
